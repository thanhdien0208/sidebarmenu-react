import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css'
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';


    function Dropdown() {
    return (
        <>
        <DropItem icon={<><FaIcons.FaUserTie /><MdIcons.MdArrowDropDown /></>}  className='user-icon-profile'>
            <DropdownMenu></DropdownMenu>
        </DropItem>
        </>
    );
    }

    function DropItem(props) {

    const [open, setOpen] = useState(false);

        return (
        <>
        <li className="drop-item">
        <Link to='/' className="icon-button" onClick={() => setOpen(!open)}>
            {props.icon}
        </Link>
        {open && props.children}
        </li>
        </>
    );
    }

    function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
        <>
        <Link to='/' className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-left">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
            </Link>
        </>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

        <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
                <DropdownItem
                    leftIcon={<RiIcons.RiImageAddFill />}
                    goToMenu="myprofile">
                    My Profile
                </DropdownItem>
                
                <DropdownItem
                    leftIcon={<CogIcon />}
                    rightIcon={<ChevronIcon />}
                    goToMenu="settings">
                    Settings
                </DropdownItem>
                <DropdownItem
                    leftIcon={<AiIcons.AiOutlineLogout/>}>
                    Logout
                </DropdownItem>

            </div>
        </CSSTransition>

        <CSSTransition
            in={activeMenu === 'settings'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
                <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                    <p>Back</p>
                </DropdownItem>
                <DropdownItem leftIcon={<MdIcons.MdKeyboardArrowRight />}>Setting-1</DropdownItem>
                <DropdownItem leftIcon={<MdIcons.MdKeyboardArrowRight />}>Setting-2</DropdownItem>
                <DropdownItem leftIcon={<MdIcons.MdKeyboardArrowRight />}>Setting-3</DropdownItem>
                <DropdownItem leftIcon={<MdIcons.MdKeyboardArrowRight />}>Setting-4</DropdownItem>
            </div>
        </CSSTransition>
        
        <CSSTransition
            in={activeMenu === 'myprofile'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
                <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                    <p>Back</p>
                </DropdownItem>
                <DropdownItem
                    leftIcon={<AiIcons.AiOutlineUser />}>
                    Name: Admin
                </DropdownItem>
                <DropdownItem
                    leftIcon={<AiIcons.AiOutlinePhone />}>
                    Phone: 0933000000
                </DropdownItem>
                <DropdownItem
                    leftIcon={<AiIcons.AiOutlineCloud />}>
                    Company: PVS Software Ltd
                </DropdownItem>
                <DropdownItem
                    leftIcon={<AiIcons.AiOutlineQrcode />}>
                    Tax code: 0315151652
                </DropdownItem>
                <DropdownItem
                    leftIcon={<RiIcons.RiMapPinUserLine />}>
                    Address: ...District 7, HCM Cty
                </DropdownItem> 
            </div>   
        </CSSTransition>
        </div>
    );
    }

    export default Dropdown;