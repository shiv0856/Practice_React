import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import moment from 'moment';

export default function Update() {
    const params = useParams();

    let navigate = useNavigate();

    const [blog, setBlog] = useState({});
    useEffect(() => {
        if (params.id) {
            let temp = JSON.parse(localStorage.getItem("blogs"));
            setBlog(temp.find((e) => { return e.id === params.id }))
        }
    }, [])

    const submit = (e) => {
        e.preventDefault();
        let title = e.target.title.value;
        let author = e.target.author.value;
        let published = e.target.published.value;
        let description = e.target.description.value;
        let obj = {
            title,
            author,
            description,
            createdOn: blog.createdOn,
            published: (published === "Yes") ? moment().format('L') : "",
            id: blog.id
        }
        let data = JSON.parse(localStorage.getItem('blogs'));
        let temp = data.filter((e) => {
            return e.id !== blog.id;
        })
        localStorage.setItem('blogs', JSON.stringify([...temp,obj]));
        return navigate("/");
    }
    return (
        <div>
            {
                blog &&
                <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" defaultValue={blog.title} placeholder="Enter Title" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" name="author" defaultValue={blog.author} placeholder="Enter Author" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description" defaultValue={blog.description} placeholder="Enter Description" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Published">
                        <Form.Label>Published</Form.Label>
                        <Form.Select aria-label="Published" name="published"
                            defaultValue={blog.published === "" ? "No" : "Yes"}
                            required >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            }
        </div>
    )
}
