import { Link, Outlet, Routes, Route } from "react-router-dom";
import {useState} from 'react';
import './sidebar.css';
import logo from "../../images/svg/logo.svg"
const Sidebar = ({state}) => {

    const [open,setOpen] = useState(false);
    const [openComponent, setOpenComponent] = useState(false);

    return (
        <div className={open ? `sidebar-theme sidebar-theme-open` : state ? `sidebar-theme sidebar-theme-mobile` : `sidebar-theme`}>
            <nav id="sidebar">
                <ul className="theme-brand text-center">
                    <li className="nav-item theme-logo">
                        <a href="index.html">
                            <img src={logo} className="navbar-logo" alt="logo"/>
                        </a>
                    </li>
                    <li className="nav-item theme-text">
                        <a href="index.html" className="nav-link"> ثُ اکس </a>
                    </li>
                    <li className="nav-item toggle-sidebar" onClick={() => setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left sidebarCollapse"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                    </li>
                </ul>
                <ul className="menu-categories">
                    <li className="menu">
                        <Link to="/admin/commission" aria-expanded="false" className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                                <span>کمیسیون</span>
                            </div>
                        </Link>
                    </li>
                    <li className="menu">
                        <Link to="/admin/trade" aria-expanded="false" className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                <span>ترید</span>
                            </div>
                        </Link>
                    </li>

                    <li className="menu">
                        <Link to="/admin/order" aria-expanded="false" className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                                <span>سفارشات</span>
                            </div>
                        </Link>
                    </li>

                    <li className="menu">
                        <Link to="/admin/deposit" aria-expanded="false" className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                                <span>دپوزیت</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;