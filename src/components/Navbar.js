import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SlidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Dropdown from './Dropdown';
import SubMenu from './SubMenu';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <Link to="#" className="navbar-logo">
                        <h2>PVS Client</h2>
                    </Link>
                    <Link to="#" className="user-profile">
                        <Dropdown />
                    </Link>
                    <Link to="#" className="navbar-search">
                        <input className='search-box' type="text" placeholder="Search..." value={searchTerm}
                            onChange={handleChange} />
                        <input type="submit" value="Search" className='btn-submit' />
                    </Link>
                    <Link to="#" className="navbar-search-1">
                        <span className='search-icon'><AiIcons.AiOutlineSearch /></span>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li className='nav-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
