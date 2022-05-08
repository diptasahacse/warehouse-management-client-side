import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { _id, name, img, des } = blog;
    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {/* {des.length > 100 ? des.slice(0, 100)+"..." : des} */}
                        {
                            des.length > 100 ? <>{des.slice(0, 100)}.<Link style={{textDecoration:"none"}} to={`/blogs/${_id}`}>more</Link></> : des

                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BlogCard;