import { Route, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import toast from 'react-hot-toast';
import { useState } from "react";
// import Login from "./Login.js";
import Layout from "./Layouts.js";


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/api/v1/auth/register', {
                name,
                email,
                phone,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error('something went wrong')
        }
    };


    return (
        <>
            <Layout title="register - ecommerce App">
                <div className="container mt-5 py-5">
                    <div className="row">
                        <form onSubmit={handleSubmit} method="post" className="form">
                            <div className="col-md-4 m-auto">

                                <div className="row">
                                    <h4>REGISTER NOW</h4>
                                    <div className="col-md-12 ">
                                        <input className='p-2 w-100'
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}

                                            required
                                            autoFocus
                                            name="name"
                                            placeholder="First Name"
                                        />
                                    </div>
                                   
                                    <div className="col-md-12">
                                        <input type="email"
                                        className='p-2 w-100 mt-3'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            autoFocus
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="number"
                                        className='p-2 w-100 mt-3'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            autoFocus
                                            name="phone"
                                            placeholder="Mobile Number" />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="password"
                                        className='p-2 w-100 mt-3'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            autoFocus
                                            name="password"
                                            placeholder="Password" />
                                    </div>

                                    <div className="col-md-12">
                                        <button className='btn btn-primary w-100 p-2 mt-3'>Submit</button>
                                        <p className="message mt-3">
                                            Already have an account? <NavLink to={'/'}>
                                                click here
                                            </NavLink>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>










                </div>
            </Layout>
        </>
    )

}

export default Register;



