import React, {Component, createRef} from 'react';
import {Link} from "react-router-dom";

//css
import './header.css';

//image
import Logo from '../../images/svg/logo.svg'
import  fa from '../../images/svg/Flag.svg';
import  en from '../../images/eng.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = createRef();
        this.handleClickOutSide = this.handleClickOutSide.bind(this);
    }
    state = {
        toggled : false
    }

    closeNavbar = () => {
        this.setState({toggled : false})
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutSide);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutSide);
    }

    handleClickOutSide = event => {
        if(this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            this.setState({toggled: false});
        }
    }

    render() {
        const {toggled} = this.state;

        return (
            <React.Fragment>
                <div className={`${toggled ? 'overlay active' : 'overlay'}`}/>
                <header ref={this.wrapperRef}>
                    <div className="logo">
                        <a href='/' onClick={this.closeNavbar}>
                            <img src={Logo} alt="LOGO" className="logo-image"/>
                            <span>ثُ اکس</span>
                        </a>
                        <div className={`toggle-button ${toggled ? 'toggled' : ''}`} onClick={() => this.setState({toggled : !toggled})} >
                            <span />
                        </div>
                    </div>
                    <ul id="navbar" className={`${toggled ? 'active' : ''}`}>
                        <li className="dropdown-toggle">
                            <a href="#" className="">
                                فارسی
                                <img src={fa} alt={"on"} className="lang-logo"/>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item"><button onClick={() => {
                                        this.handleClick('fa');
                                        this.closeNavbar();
                                    }}><img src={fa} alt="fa" width={15}/>
                                        فارسی

                                    </button></li>
                                    <li className="dropdown-item"><button onClick={() => {
                                        this.handleClick('en');
                                        this.closeNavbar();
                                    }}><img src={en} alt="fa" width={15} />
                                        انگلیسی

                                    </button></li>
                                </ul>
                            </a>
                        </li>
                        <li>
                            <Link to="/Currencies" onClick={this.closeNavbar}>
                                لیست دارایی ها
                            </Link>
                        </li>
                        <li>
                            <Link to="/History" onClick={this.closeNavbar}>تاریخچه</Link>
                        </li>
                        <li>
                            <Link to="/AboutUs" onClick={this.closeNavbar}>درباره ما</Link>
                        </li>
                    </ul>
                </header>
            </React.Fragment>
    )
    }
}

export default Header;