import "./styles.css"
import {Link} from "react-router-dom";
import { useState } from "react";
const Navbar = () =>{
    let [aboutMe, setAboutMe] = useState("ABOUT ME");
    let [photography,setPhotography] = useState("PHOTOGRAPHY")
    const handleMouseOverHome = ()=>{
        setAboutMe("about me");
    }
    const handleMouseOutHome = ()=>{
        setAboutMe("ABOUT ME");
    }
    const handleMouseOverPhot = ()=>{
        setPhotography("photography");
    }
    const handleMouseOutPhot = ()=>{
        setPhotography("PHOTOGRAPHY");
    }
    return(
        <nav>
            <Link className="name" to="/home">Shereya Philip</Link>
            <ul>
                <li className="left">
                    <Link to="/about" className="about-nav" onMouseOver={handleMouseOverHome} onMouseOut={handleMouseOutHome}>{aboutMe}</Link>
                </li>
                <li className="right">
                    <Link to="/photography" className="photo-nav" onMouseOver={handleMouseOverPhot} onMouseOut={handleMouseOutPhot}>{photography}</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;