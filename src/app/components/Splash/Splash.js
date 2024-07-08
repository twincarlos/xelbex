import "./Splash.css";
import Link from "next/link";

export default function Splash() {
    return (
        <section className="splash">
            <div className="splash-content">
                <h1>Boost and Elevate Your Business with Xelbex</h1>
                <span>Expert business consulting, advanced software development, and strategic marketing solutions for exceptional growth.</span>
                <Link className="solid" href={"/"}>Services</Link>
            </div>
        </section>
    );
};