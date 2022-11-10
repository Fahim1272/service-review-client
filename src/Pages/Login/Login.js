import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const Login = () => {
    const { signInuser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, SetError] = useState('');
    const [success, setSuccess] = useState(false);
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signInuser(email, password)
            .then(result => {
                const user = result.user;
                setSuccess(true)
                form.reset();
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error);
                SetError(error.message)
            })
        console.log(email, password);

    }
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const HandleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                        {
                            success && <p>Login successfully</p>
                        }
                        <div>
                            <button onClick={HandleGoogleSignIn} className='btn btn-outline'>Google</button>
                        </div>
                        <div className="form-control mt-6">
                            <p className='text-sm'>New to Photography? please <Link to={'/register'}>Sign up</Link></p>
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;