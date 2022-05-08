import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import BlogCard from './BlogCard/BlogCard';

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setAllBlogs(data))
    },[])
    console.log(allBlogs)
    return (
        <div style={{ 'backgroundColor': "#F7F8FD" }} className="overflow-hidden">
            <Container className='my-4 p-5' style={{ 'backgroundColor': "#FFF", "borderRadius": "15px" }}>
                <h3>Blogs</h3>
                <div>
                    <Row xs={1} sm={2} md={3} lg={4}>
                        {
                            allBlogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                        }
                    </Row>
                </div>

            </Container>

        </div>
    );
};

export default Blogs;