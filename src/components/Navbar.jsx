import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return(
        <div className={scrolled ? "navbar scrolled" : "navbar"}>
            <div className='container'>
                <div className="top-left">
                    <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="M-Flix Logo" />
                    <nav class="main-nav">
                        <span>Home</span>
                        <span>TV Shows</span>
                        <span>Movies</span>
                        <span>Originals</span>
                    </nav>
                </div>
                <div className="top-right">
                    <SearchIcon className='icon' />
                    <NotificationsIcon className='icon' />
                    <img src='./images/pratiks.jpg' alt="User avatar" />
                    <div className='user-profile'>
                        <ArrowDropDown className='icon' />
                        <div className='profile-option'>
                            <span>Profile</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;