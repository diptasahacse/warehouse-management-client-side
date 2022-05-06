import { useEffect, useState } from "react";

const useProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    return [allProducts, setAllProducts];

}
export default useProducts;