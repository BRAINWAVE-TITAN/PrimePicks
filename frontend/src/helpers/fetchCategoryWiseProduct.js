const { default: summaryAPI } = require("../common/index")
const fetchCategoryWiseProduct = async(category)=>{
    const response = await fetch(summaryAPI.categoryWiseProduct.url,{
        method : summaryAPI.categoryWiseProduct.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category : category
        })
    })

    const dataResponse = await response.json()
    return dataResponse
}
export default fetchCategoryWiseProduct
