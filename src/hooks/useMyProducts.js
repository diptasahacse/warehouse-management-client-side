
import React, { useEffect, useState } from 'react';
const useMyProducts = (email) => {
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        fetch(`https://agile-waters-08057.herokuapp.com/products?email=${email}`)
            .then(res => res.json())
            .then( data => setMyProducts(data))
    }, [])

    return [myProducts, setMyProducts];

}
export default useMyProducts;