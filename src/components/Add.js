import React from 'react'
import { Button, Form } from 'react-bootstrap';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

export default function Add() {
    let navigate = useNavigate();

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
            createdOn: moment().format('L'),
            published: (published === "Yes") ? moment().format('L') : "",
            id : uuidv4()
            
        }
        
        let temp =  localStorage.getItem('blogs') !== null ? JSON.parse(localStorage.getItem('blogs')) : []
        localStorage.setItem('blogs', JSON.stringify([...temp,obj]));
        return navigate("/");
    }

    return (
        <div>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Enter Title" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" name="author" placeholder="Enter Author" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control  as="textarea" name="description" placeholder="Enter Description" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Published">
                    <Form.Label>Published</Form.Label>
                    <Form.Select aria-label="Published" name="published" required >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

