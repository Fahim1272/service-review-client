import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';


const Header = () => {
    const menus = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/reviews'>My Reviews</Link></li>
    </>
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('./login')
    };
    const navigateToRegister = () => {
        navigate('./register')
    };
    
    const { user, providerLogout } = useContext(AuthContext);
    const handleLogOut = () => {
        providerLogout()
            .then(() => { })
            .catch(error => console.error(error))

    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menus}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">PhotoCanvas-By Fahim M Ishaq</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menus}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?

                        <>
                            <span>{user?.displayName}</span>
                            <button onClick={handleLogOut} className='mx-3 btn btn-active btn-secondary'>Log Out</button>{' '}
                        </>
                        :
                        <>
                            <button onClick={navigateToLogin} className=' mx-3 btn btn-outline btn-secondary'>Login</button>{' '}
                            <button className='ms-3 btn btn-active btn-accent' onClick={navigateToRegister} >Register</button>{' '}
                        </>
                }
                {/* <Link to='/login' className="btn">Login</Link> */}
            </div>
        </div>
    );
};

export default Header;