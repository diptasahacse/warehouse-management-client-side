import { useState } from "react"

const useQuantity = (quantity) =>{
    const [currentQuantity, setCurrentQuantity] = useState(Number(quantity));
    return [currentQuantity, setCurrentQuantity];

}
export default useQuantity;