import React from 'react'
import Footer from '../components/Footer'
import Meta from '../components/Meta'

const AboutScreen = () => {
    return (
        <>
            <Meta title="About Us" />
            <section className="section-margin calc-60px">
                <div className="container shadow-sm about_us">
                    <div className="section-intro">
                        <h5><span className="section-intro__style">About Us</span></h5>
                    </div>
                    <div className="about_area">
                        <p>
                            Welcome to Betadisney, your number one source for computing (including desktops, laptops and tablets), components (storage devices and core components),
                            gaming (computers and consoles), electronics (mobiles, home theaters and home appliances), networking (security devices, home networking and smart home),
                            office solutions (furniture, printing and display and office supplies), along with the software options. We're dedicated to giving you the very best of products, with a focus on dependability, customer service and uniqueness.
                        </p>
                        <p>
                            Betadisney brings you a variety of superior-quality brands, like Apple, HP, Dell, Lenovo, Windows, Blade, and Sony. You can pay for your order using your credit card, cash on delivery, or write a cheque and Bank Transfers.
                            Delivery takes a day within Lagos and 2-4 working days outside Lagos. If you want to personally pick up your order from a location instead of delivery, we have available locations all across the country.
                        </p>
                        <p>
                            Founded in 2012 by Mr. Adeeko, Betadisney has come a long way from its humble beginnings. When The founder first started out, his passion for providing the best equipment(Gadgets) for his fellow humanity drove him to do intense
                            research on quality products, and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over the globe and are thrilled to be a part of the fair trade wing of the information
                            technology industry.
                        </p>
                        <p>
                            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                        </p>
                        <p className="text-center">
                            <img src="/images/paystack-secured.png" alt="Paystack" />
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutScreen