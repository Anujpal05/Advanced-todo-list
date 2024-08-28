import React from 'react';
import logo from '../assets/logo.png'
import { IoReorderThreeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";
import { TbMoonStars } from "react-icons/tb";
import '../css/styles.css'
import Sidebar from './Sidebar';


const Navbar = () => {
    return (
        <div>
            <div className=' navbar'>
                <div className=' nav-left'>
                    <div className=' three-line'><IoReorderThreeOutline /></div>
                    <span><img src={logo} alt="" height={32} /></span>
                </div>
                <div className='nav-right '>
                    <span><CiSearch /></span>
                    <span><CgMenuGridR /></span>
                    <span><TbMoonStars /></span>

                </div>
            </div>
        </div>
    )
}

export default Navbar
