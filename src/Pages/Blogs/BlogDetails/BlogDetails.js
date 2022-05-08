import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const [blogDetails, setBlogDetails] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlogDetails(data))

    }, [id])
    console.log(blogDetails)
    return (
        <div style={{ 'backgroundColor': "#F7F8FD" }} className="overflow-hidden">
            <Container className='my-4 p-5' style={{ 'backgroundColor': "#FFF", "borderRadius": "15px" }}>
                <div className='d-flex justify-content-center'>
                    <img className='img-fluid w-50' src={blogDetails?.img} alt="" />
                </div>
                <h4 className='mb-4' style={{ color: "#86BA09" }}>{blogDetails?.name}</h4>
                <p>{blogDetails?.des}</p>


            </Container>

        </div>
    );
};

export default BlogDetails;