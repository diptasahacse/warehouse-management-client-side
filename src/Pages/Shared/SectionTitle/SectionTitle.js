import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className='text-center'>
            <h3 className='fw-bold m-0'>{title}</h3>
            <img src='https://i.ibb.co/NN89Xwx/afterlogo.png' alt="logo" />
        </div>
    );
};

export default SectionTitle;