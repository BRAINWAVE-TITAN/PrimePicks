const BDdomain = "http://localhost:1111"
const summaryAPI = {
    signup: {
        url: `${BDdomain}/api/signup`,
        method: "post"
    },
    signin: {
        url: `${BDdomain}/api/signin`,
        method: "post"
    },
    current_user: {
        url: `${BDdomain}/api/user-details`,
        method: "get"
    },
    logout: {
        url: `${BDdomain}/api/userLogout`,
        method: "get"
    },
    allUsers: {
        url: `${BDdomain}/api/all-users`,
        method: "get"
    },
    updateUser: {
        url: `${BDdomain}/api/update-user`,
        method: "post"
    },
    uploadProduct: {
        url: `${BDdomain}/api/upload-product`,
        method: "post"
    },
    allProduct: {
        url: `${BDdomain}/api/get-product`,
        method: 'get'
    },
    updateProduct: {
        url: `${BDdomain}/api/update-product`,
        method: 'post'
    },
    categoryProduct: {
        url: `${BDdomain}/api/get-category-product`,
        method: 'get'
    },
    categoryWiseProduct: {
        url: `${BDdomain}/api/category-product`,
        method: 'post'
    },
    productDetails: {
        url: `${BDdomain}/api/product-details`,
        method: 'post'
    },
    addToCartProduct: {
        url: `${BDdomain}/api/addtocart`,
        method: 'post'
    },
    addToCartProductCount: {
        url: `${BDdomain}/api/countAddToCartProduct`,
        method: 'get'
    },
    addToCartProductView: {
        url: `${BDdomain}/api/view-cart-product`,
        method: 'get'
    },
    updateCartProduct: {
        url: `${BDdomain}/api/update-cart-product`,
        method: 'post'
    },
    deleteCartProduct: {
        url: `${BDdomain}/api/delete-cart-product`,
        method: 'post'
    },
    searchProduct: {
        url: `${BDdomain}/api/search`,
        method: 'get'
    },
    filterProduct: {
        url: `${BDdomain}/api/filter-product`,
        method: 'post'
    }
}

export default summaryAPI;