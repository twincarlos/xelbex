import "./Navbar.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="logo-container">
                <Image className="logo-img" alt="xelbex logo" src={logo} />
                <p className="logo-text">Xelbex</p>
            </div>
            <div className="nav-links">
                <Link href={"/"}>All Pages</Link>
                <Link href={"/"}>Features</Link>
                <Link href={"/"}>Pricing</Link>
                <Link href={"/"}>Contact Us</Link>
            </div>
            <div className="nav-button-container">
                <Link className="nav-button solid secondary" href={""}>Get Template for Free</Link>
            </div>
        </header>
    );
};