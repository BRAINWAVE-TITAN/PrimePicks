const express = require('express');

const router = express.Router()

const usersignupcontroller = require('../controller/user/usersignup');
const usersignincontroller = require('../controller/user/usersignin');
const userdetail = require('../controller/user/userdetail');
const auth = require('../middlewares/authtoken');
const userLogout = require('../controller/user/userLogout');
const allUsers = require('../controller/user/allUsers');
const updateUser = require('../controller/user/updateUser');
const UploadProductController = require('../controller/product/uploadProduct');
const getProductController = require('../controller/product/getProduct');
const updateProductController = require('../controller/product/updateProduct');
const getCategoryProduct = require('../controller/product/getCategoryProductOne');
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct');
const getProductDetails = require('../controller/product/getProductDetails');
const addToCartController = require('../controller/user/addToCartController');
const countAddToCartProduct = require('../controller/user/countAddToCartProduct');
const addToCartViewProduct = require('../controller/user/addToCartViewProduct');
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct');
const searchProduct = require('../controller/product/searchProduct');
const filterProductController = require('../controller/product/filterProduct');

router.post('/signup',usersignupcontroller)
router.post('/signin',usersignincontroller)
router.get('/user-details',auth,userdetail)
router.get('/userLogout',userLogout)


//admin panel
router.get('/all-users',auth,allUsers)
router.post('/update-user',auth,updateUser)

//product
router.post('/upload-product',auth,UploadProductController)
router.get('/get-product',getProductController)
router.post('/update-product',auth,updateProductController)
router.get('/get-category-product',getCategoryProduct)
router.post('/category-product',getCategoryWiseProduct)
router.post('/product-details',getProductDetails)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)

//Cart
router.post('/addtocart',auth,addToCartController)
router.get('/countAddToCartProduct',auth,countAddToCartProduct)
router.get('/view-cart-product',auth,addToCartViewProduct)
router.post('/update-cart-product',auth,updateAddToCartProduct)
router.post('/delete-cart-product',auth,deleteAddToCartProduct)

module.exports = router