import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Home() {
    const [blogs, setBlogs] = useState(
        localStorage.getItem('blogs') !== null ? JSON.parse(localStorage.getItem('blogs')).sort((a, b) => a.title - b.title) : []
    );

    const handleDelete = (id) => {
        let temp = blogs.filter((e) => {
            return e.id !== id;
        })
        localStorage.setItem('blogs', JSON.stringify(temp));
        setBlogs(temp);
    }
    return (
        <div>
            <Button variant="info" as={Link} to="/add"> ADD</Button>
            <Table striped bordered hover>
                <thead>     
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>DOC</th>
                        <th>DOP</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            <td>{blog.createdOn}</td>
                            <td>{blog.published}</td>
                            <td>
                                <Button variant="primary" as={Link} to={"/view/" + blog.id} >View</Button>{' '}
                                <Button variant="success" as={Link} to={"/update/" + blog.id} >Update</Button>{' '}
                                <Button variant="danger" onClick={() => handleDelete(blog.id)}>Delete</Button>{' '}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
