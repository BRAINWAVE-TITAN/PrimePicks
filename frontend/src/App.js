// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import summaryAPI from './common';
import Context from './context'
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch()
  const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDetails = async () => {
    const dataresponse = await fetch(summaryAPI.current_user.url, {
      method: summaryAPI.current_user.method,
      credentials: 'include',

    });
    const dataAPI = await dataresponse.json();
    if(dataAPI.success){
      dispatch(setUserDetails(dataAPI.data))
    }
  }

  const fetchUserAddToCart = async()=>{
    const dataResponse = await fetch(summaryAPI.addToCartProductCount.url,{
      method : summaryAPI.addToCartProductCount.method,
      credentials : 'include'
    })
    const dataApi = await dataResponse.json()
    setCartProductCount(dataApi?.data?.count)
  }
  useEffect(() => {
    fetchUserDetails()
    fetchUserAddToCart()
  },[])
  return (
    <>
      <Context.Provider value={{
        fetchUserDetails,
        cartProductCount, // current user  cart product count,
        fetchUserAddToCart 
      }}>
        <ToastContainer position='top-center'/>
        <Header />
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
