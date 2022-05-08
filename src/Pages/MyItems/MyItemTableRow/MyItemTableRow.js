import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyItemTableRow = ({ product, index, deleteProductHandler }) => {
    // console.log(product)
    const { _id, email, productImageLink, productName, productPrice, productQuantity, supplierName } = product;
    const navigate = useNavigate();

    const manageProductHandler = (id) => {
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
                <div className='d-flex justify-content-between align-items-center'>
                    <button onClick={() => manageProductHandler(_id)} style={{ padding: '2px 5px' }} className='primary-custom-button m-1'>Manage</button>
                    <button onClick={() => deleteProductHandler(_id)} style={{ padding: '2px 5px' }} className='danger-custom-button m-1'>Delete</button>
                </div>

            </td>
        </tr>
    );
};

export default MyItemTableRow;