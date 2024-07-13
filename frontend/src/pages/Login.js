import React, { useContext, useState } from 'react'
import loginicon from '../assest/signin.gif'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import summaryAPI from '../common';
import Context from '../context';
import { toast } from 'react-toastify';

const Login = () => {
    const [showPassword,setshowPassword] = useState(false)
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate()
    const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)

    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }


    const handleSubmit = async(e) =>{
        e.preventDefault()

        const dataResponse = await fetch(summaryAPI.signin.url,{
            method : summaryAPI.signin.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            navigate('/')
            fetchUserDetails()
            fetchUserAddToCart()
        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }

    }

    console.log("data login",data)
    return (
        <section id='login'>
            <div className="mx-auto container p-4 ">

                <div className="bg-white p-2 py-5 w-full max-w-sm mx-auto rounded">
                    <div className="w-20 h-20 mx-auto">
                        <img src={loginicon} alt="login" />
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email: </label>
                            <div className='bg-slate-100 p-2'>
                                <input 
                                    type="email" 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    placeholder='Enter your Email...' 
                                    className='w-full h-full outline-none bg-transparent' 
                                />
                            </div>
                        </div>

                        <div>
                            <label>Password: </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    name='password'
                                    value={data.password}
                                    onChange={handleOnChange}
                                    placeholder='Enter your Password...' 
                                    className='w-full h-full outline-none bg-transparent' 
                                />
                                <div className='cursor-pointer text-xl' onClick={() => setshowPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <IoEyeOff />
                                            ) : (
                                                <IoEye />
                                            )
                                        }

                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-green-600'>
                                Forgot Password
                            </Link>
                        </div>

                        <button className='bg-green-400 hover:bg-green-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
                    </form>

                    <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-blue-600 hover:text-blue-700 hover:underline'>Sign Up</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Login
