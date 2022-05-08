import { useEffect, useState } from "react";

const useProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch(`https://agile-waters-08057.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    return [allProducts, setAllProducts];

}
export default useProducts;