import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex justify-around items-center py-5 bg-gradient-to-b from-cyan-900 via-blue-900 to-stone-900">
            <div className="xs:hidden md:visible">
                <p className="font-bold ">
                    ARACHNOMESH
                </p>
            </div>
            <div className="w-1/2">
                <ul className=" flex justify-around font-bold text-slate-400">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/battles'>Bottles</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/link">Contact</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </div>
        </div>


    );
};

export default Navbar;