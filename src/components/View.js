import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function View() {
    const params = useParams();

    const [blog, setBlog] = useState({});
    useEffect(() => {
        if (params.id) {
            let temp = JSON.parse(localStorage.getItem("blogs"));
            setBlog(temp.find((e) => { return e.id === params.id }))
        }
    }, [])

    return (
        <div>
            {
                blog &&
                <div>
                    <h1> {blog.title}</h1>
                    <p> {blog.description}</p>
                    <div>
                        <span>
                            {blog.author}
                        </span>
                        <span>
                            {blog.createdOn}
                        </span>
                    </div>
                </div>
            }
        </div>
    )
}
