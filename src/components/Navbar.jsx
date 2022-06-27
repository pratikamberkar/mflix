import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
    return(
        <div className="navbar">
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
                    <SearchIcon />
                    <NotificationsIcon />
                </div>
            </div>
        </div>
    )
}

export default Navbar;