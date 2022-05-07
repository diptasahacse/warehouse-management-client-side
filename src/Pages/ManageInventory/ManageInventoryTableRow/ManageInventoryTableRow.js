import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventoryTableRow = ({ product, index, deleteProductHandler }) => {
    const { _id, email, productImageLink, productName, productPrice, productQuantity, supplierName } = product;

    const navigate = useNavigate();

    const manageProductHandler = (id) =>{
        navigate(`/inventory/${id}`)
        

    }


    return (
        <tr>
            <td>{index + 1}</td>
            <td>{productName}</td>
            <td>{email}</td>
            <td className='d-flex justify-content-center'>
                <div style={{ height: "80px", width: "80px" }}>
                    <img className='w-100 rounded-circle' src={productImageLink} alt={productName} />
                </div>
            </td>
            <td>{supplierName}</td>
            <td>{productQuantity}</td>
            <td>{productPrice}</td>
            <td>{Number(productPrice) * Number(productQuantity)}</td>
            <td >
                <button onClick={() => manageProductHandler(_id)} style={{ padding: '2px 5px' }} className='btn btn-sm btn-info m-1'>Manage</button>
                <button onClick={() => deleteProductHandler(_id)} style={{ padding: '2px 5px' }} className='btn btn-sm btn-danger m-1'>Delete</button>

            </td>
        </tr>
    );
};

export default ManageInventoryTableRow;