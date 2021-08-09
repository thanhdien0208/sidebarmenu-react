import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Overview',
            path: '/overview',
            icon: <IoIcons.IoIosPaper />
        },
        {
            title: 'Weekly',
            path: '/weekly',
            icon: <IoIcons.IoIosPaper />
        },
        {
            title: 'Monthly',
            path: '/monthly',
            icon: <IoIcons.IoIosPaper />
        },
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillPieChart />,
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaAccusoft />,
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
    },
    {
        title: 'SharedDirs',
        path: '/shareddirs',
        icon: <FaIcons.FaSlideshare />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'KH - Cty Heineiken',
            path: '/heineiken',
            icon: <IoIcons.IoIosPaper />
        },
        {
            title: 'KH - Tiki',
            path: '/tiki',
            icon: <IoIcons.IoIosPaper />
        },
        {
            title: 'KH - Viettel',
            path: '/viettel',
            icon: <IoIcons.IoIosPaper />
        },
        {
            title: 'KH - GNS',
            path: '/gns',
            icon: <IoIcons.IoIosPaper />
        },
        ]
    },
    {
        title: 'Account',
        path: '/account',
        icon: <MdIcons.MdAccountCircle />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'New...',
            path: '/new',
            icon: <IoIcons.IoIosPaper />
        },
        {
            title: 'Profile',
            path: '/profile',
            icon: <IoIcons.IoIosPaper />
        },
        {
            title: 'Settings',
            path: '/settings',
            icon: <IoIcons.IoIosPaper />
        },
        {
            title: 'Sign out',
            path: '/signout',
            icon: <IoIcons.IoIosPaper />
        },
        ]
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
    },
    
];