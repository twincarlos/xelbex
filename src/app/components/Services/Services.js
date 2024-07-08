import "./Services.css";
import logo from "../../assets/logo.png"
import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <section className="services">
            <div className="services-header">
                <div className="services-title">
                    <h1>Our Services</h1>
                </div>
                <div className="services-description">
                    <p>Scale your site to any size with the built-in CMS, AI-powered localization, and site maintenance tools.</p>
                </div>
                <div className="services-link">
                    <Link className="solid" href={"/"}>Start for free today</Link>
                </div>
            </div>
            <div className="services-widgets">
                <div className="service-widget-row service-widget-top-row">
                    <div className="service-widget service-widget-1">
                        <div className="service-widget-header">
                            <h2>Software management</h2>
                            <p>Description</p>
                        </div>
                        <div className="service-widget-body">
                            <Image alt="widget graphic" src={logo} />
                        </div>
                    </div>
                    <div className="service-widget service-widget-2">
                        <div className="service-widget-header">
                            <h2>Marketing research</h2>
                            <p>Description</p>
                        </div>
                        <div className="service-widget-body">
                            <Image alt="widget graphic" src={logo} />
                        </div>
                    </div>
                </div>
                <div className="service-widget-row service-widget-bottom-row">
                    <div className="service-widget service-widget-3">
                        <div className="service-widget-header">
                            <h2>Strategic planning</h2>
                            <p>Description</p>
                        </div>
                        <div className="service-widget-body">
                            <Image alt="widget graphic" src={logo} />
                        </div>
                    </div>
                    <div className="service-widget service-widget-4">
                        <div className="service-widget-header">
                            <h2>Financial advisory</h2>
                            <p>Description</p>
                        </div>
                        <div className="service-widget-body">
                            <Image alt="widget graphic" src={logo} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};