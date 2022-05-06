import React, { useState } from 'react';

const ManageInventoryTableRow = ({ product, index }) => {
    const { _id, email, productName, productPrice, productQuantity, supplierName } = product;

    // console.log(allProducts)
    const [currentQuantity, setCurrentQuantity] = useState(Number(productQuantity))

    const onStockUpdateHandler = (id) => {

        setCurrentQuantity(currentQuantity + 1);
        console.log(currentQuantity)

    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{productName}</td>
            <td>{email}</td>
            <td>{supplierName}</td>
            <td>{productQuantity}</td>
            <td>{productPrice}</td>
            <td>{Number(productPrice) * Number(productQuantity)}</td>
            <td className='d-flex justify-content-between'>
                <button onClick={() => onStockUpdateHandler(_id)} style={{ padding: '2px 5px' }} className='btn btn-sm btn-warning m-1'>Update</button>
                <button style={{ padding: '2px 5px' }} className='btn btn-sm btn-danger m-1'>Delete</button>

            </td>
        </tr>
    );
};

export default ManageInventoryTableRow;