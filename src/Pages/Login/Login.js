import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';

const Login = () => {
    // const {providerLogin} =useContext(UserContext)
    // const googleProvider = new GoogleAuthProvider()
    // const handleGoogleSignIn = () => {
    //     providerLogin(googleProvider)
    //     .then(result =>{
    //         const user = result.user;
    //         console.log(user);
    //     })
    //     .catch(error=>console.error(error))
    // }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div>
                            <button  className='btn btn-outline'>Google</button>
                        </div>
                        <div className="form-control mt-6">
                            <p className='text-sm'>New to Photography? please <Link to={'/register'}>Sign up</Link></p>
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;