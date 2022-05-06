import React from 'react';

const MyItemTableRow = ({ product,index }) => {
    console.log(product)
    const { productName, email, productPrice, productQuantity } = product;

    return (
        <tr>
            <td>{index+1}</td>
            <td>{productName}</td>
            <td>{email}</td>
            <td>{productQuantity}</td>
            <td>{productPrice}</td>
            <td>{Number(productPrice)*Number(productQuantity)}</td>
            <td className='text-center'>
                <button className='btn btn-sm btn-danger'>Delete</button>
            </td>
        </tr>
    );
};

export default MyItemTableRow;