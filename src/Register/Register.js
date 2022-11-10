import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext, AuthProvider} from '../Contexts/AuthProvider';
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = event =>{
        event.preventDefault();
         const form = event.target;
         const email = form.email.value;
         const password = form.password.value;
         createUser(email, password)
         .then(result=>{
            const user = result.user;
            console.log(user);
         })
         .catch(error => console.error(error))
    }
    return (
        
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <p className='text-sm'> Already have an account on Photography? please <Link to={'/login'}>Log in</Link></p>
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;