import React from 'react';
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Navigate, Link, useNavigate} from 'react-router-dom'

import axios from "../../axios.js";
function Registration(props) {
    const navigate = useNavigate();
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);


            axios.post('/register', {fullName: formJson.myInput}).then(function (response) {
                // handle success
                console.log(response.data);
            })
        navigate('/game/64614b5eece343ab88529e14')
    }
    return (
        <>
            <div className={'container'}>
                <h1>Welcome to Utopia</h1>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" method="post" onSubmit={handleSubmit}>
                    <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Name..."
                           aria-label="Search"/>
                        <button className="btn btn-primary" type="submit">Register</button>
                </form>

            </div>
        </>
    );
}

export default Registration;