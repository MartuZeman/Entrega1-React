import products from "./products";

function getMockAPIData(){
    const promiseProducts = new Promise ( (resolve, reject)=> {
        setTimeout(()=>{
            resolve(products)
        },2000)
    })

    return promiseProducts

}

export function getProductById(idParam){
    const requestedProduct = products.find(product => product.id === Number(idParam))

        const promiseProduct = new Promise ( (resolve)=> {
        setTimeout(()=>{
            resolve(requestedProduct)
        },2000)
    })

    return promiseProduct


}


export function getProductByCategory(catParam){
        const requestedCategory = products.filter(product => product.category === catParam)
        console.log(requestedCategory)
        const promiseProduct = new Promise ( (resolve)=> {
        setTimeout(()=>{
            resolve(requestedCategory)
        },2000)
    })

    return promiseProduct

}

export default getMockAPIData;