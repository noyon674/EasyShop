import { ADDTOCART, DECREASEITEM, DELETEITEM, INCREASEITEM, RESETCART, STOREPRODUCTS } from "../type/type"

export const storeProducts = (products)=>{
    return {
        type: STOREPRODUCTS,
        payload: products
    }
}

export const addTOCart = (product)=>{
    return {
        type: ADDTOCART,
        payload: product
    }
}

export const resetCart = ()=>{
    // localStorage.clear()
    return {
        type: RESETCART
    }
}

export const increateItem = (id)=>{
    return {
        type: INCREASEITEM,
        payload: id
    }
}

export const decreaseItem = (id)=>{
    return {
        type: DECREASEITEM,
        payload: id
    }
}

export const deleteItem = (id)=>{
    return {
        type: DELETEITEM,
        payload: id
    }
}