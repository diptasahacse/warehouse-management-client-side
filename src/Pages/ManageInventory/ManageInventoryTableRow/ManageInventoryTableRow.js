import React from 'react';

const ManageInventoryTableRow = ({ product, index }) => {
    const { _id, email, productName, productPrice, productQuantity, supplierName } = product;
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
                <button style={{ padding: '2px 5px' }} className='btn btn-sm btn-warning'>Update Stock</button>
                <button style={{ padding: '2px 5px' }} className='btn btn-sm btn-danger'>Delete</button>

            </td>
        </tr>
    );
};

export default ManageInventoryTableRow;