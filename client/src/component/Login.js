import { Route, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import toast from 'react-hot-toast';
import { useState } from "react";
// import { useAuth } from "./auth.js";
import Layout from "./Layouts.js";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/api/v1/auth/Login', {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                
                navigate( '/home')
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('check email or password')

        }
    };

    return (
        <>
            <Layout title="Signup - ecommerce App">
                <div className="container mt-5 py-5">
                    <div className="row">

                        <form onSubmit={handleSubmit} method="post" className="form">
                            <div className="col-md-4 m-auto p-5">
                                <div className="row">
                                    <h4>Login</h4>
                                    <div className="col-md-12 ">

                                        <input type="email"
                                            className="w-100 p-2 mt-3"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            autoFocus
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>



                                    <div className="col-md-12">
                                        <input type="password"
                                            className="w-100 p-2 mt-3"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            autoFocus
                                            name="password"
                                            placeholder="Password" />

                                    </div>

                                    <div className="col-md-12">
                                        <button className='btn btn-primary w-100 mt-3'>Submit</button>
                                        <p className="message">
                                            don't have an account? <NavLink to={'/register'}>
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

export default Login;