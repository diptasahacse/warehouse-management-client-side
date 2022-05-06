import React from 'react';

const MyItemTableRow = ({ product, index }) => {
    console.log(product)
    const { _id, productName, email, productPrice, productQuantity } = product;
    const onDeleteItemHandler = (id) => {

    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{productName}</td>
            <td>{email}</td>
            <td>{productQuantity}</td>
            <td>{productPrice}</td>
            <td>{Number(productPrice) * Number(productQuantity)}</td>
            <td className='text-center'>
                <button onClick={() => onDeleteItemHandler(_id)} style={{ padding: '2px 5px' }} className='btn btn-sm btn-danger'>Delete</button>
            </td>
        </tr>
    );
};

export default MyItemTableRow;