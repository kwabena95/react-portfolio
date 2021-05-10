import { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'


const NavTabs = (props) => {
    // toggle menu and close icons
    const [click, setClick] = useState(false);
    const clickhandler = () => setClick(!click);

    // show nav menu
    // const [showMenu, setShowMenu] = useState(false);
    // const showHambugerMenu = () => setShowMenu(!showMenu);

    const tabs = [
        {
            id: 1,
            navLink: "Home"
        },
        {
            id: 2,
            navLink: "About"
        },
        {
            id: 3,
            navLink: "Contact"
        },
        {
            id: 4,
            navLink: "Portfolio"
        },
        {
            id: 6,
            navLink: "Resume"
        }
    ];
    return (
        <header className="header">
            <div className="header-center">
                <div className="logo"><h3>devByEb</h3></div>
                <ul className={click ? 'nav-items show' : 'nav-items'} onClick={clickhandler}>
                    {tabs.map(({ id, navLink }) => {
                        return <li key={id}><a href={`#${navLink.toLocaleLowerCase()}`} onClick={() => props.pageChangeHandler(navLink)} className="nav-link">{navLink}</a>
                        </li>
                    })}
                </ul>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/ebenezer-kankam-287676172/" className="social-icon" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/kwabena95" className="social-icon" target="_blank" rel="noreferrer"><FaGithub /></a>
                </div>
                <button className="menu" onClick={clickhandler}>
                    {click ? <FaTimes className="icon red" /> : <FaBars className="icon" />}
                </button>
            </div>

        </header>

    )
}

export default NavTabs
