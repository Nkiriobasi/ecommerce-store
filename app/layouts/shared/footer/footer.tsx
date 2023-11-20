import Image from "next/image"
import Link from "next/link"
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs"

import Newsletter from '@/public/images/newsletter.png'

const Footer = () => {
  return (
    <footer>
        <div className="footer py-4">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-7">
                        <div className="footer-top-data d-flex gap-10 align-items-center">
                            <Image src={Newsletter} alt="newsletter" />
                            <h4 className="mb-0 text-white">Sign Up for Newsletter</h4>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="input-group">
                            <input 
                                type="text" 
                                name="yourEmail"
                                id="yourEmail"
                                className="form-control py-1" 
                                placeholder="Your Email" 
                                aria-label="Your Email" 
                                aria-describedby="basic-addon2"
                            />
                            <button className="input-group-text p-2" id="basic-addon2">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-4">
                        <h5 className="text-white mb-4">Contact Us</h5>
                        <div>
                            <address className="text-white">
                                Demo Store 
                                <br /> 
                                No. 1234 Aje, Lagos. 
                                <br />
                                Nigeria 
                            </address>

                            <a 
                                href="tel:+234 7037648977" 
                                className="mt-3 d-block mb-2 text-white"
                            >
                                +234 7037648977
                            </a>

                            <a 
                                href="mailto:exampleemail@gmail.com" 
                                className="d-block mb-0 text-white"
                            >
                                exampleemail@gmail.com
                            </a>

                            <div className="social-icons d-flex align-items-center gap-30 mt-4">
                                <a href="/#" className="">
                                    <BsLinkedin className="text-white fs-4" />
                                </a>
                                <a href="/#" className="">
                                    <BsInstagram className="text-white fs-4" />
                                </a>
                                <a href="/#" className="">
                                    <BsGithub className="text-white fs-4" />
                                </a>
                                <a href="/#" className="">
                                    <BsYoutube className="text-white fs-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <h5 className="text-white mb-4">Information</h5>
                        <div className="footer-links d-flex flex-column">
                            <Link href="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                            <Link href="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                            <Link href="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                            <Link href="/tos" className="text-white py-2 mb-1">Terms Of Service</Link>
                            <Link href="/blogs" className="text-white py-2 mb-1">Blogs</Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <h5 className="text-white mb-4">Account</h5>
                        <div className="footer-links d-flex flex-column">
                            <Link href="/about" className="text-white py-2 mb-1">About Us</Link>
                            <Link href="/faq" className="text-white py-2 mb-1">Faq</Link>
                            <Link href="/contact" className="text-white py-2 mb-1">Contact</Link>
                        </div>
                    </div>
                    <div className="col-2">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <div className="footer-links d-flex flex-column">
                            <Link href="/#" className="text-white py-2 mb-1">Laptops</Link>
                            <Link href="/#" className="text-white py-2 mb-1">Headphones</Link>
                            <Link href="/#" className="text-white py-2 mb-1">Smart Watches</Link>
                            <Link href="/#" className="text-white py-2 mb-1">Tablets</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center mb-0 text-white">
                            &copy; {new Date().getFullYear()}; Powered by Nk Online Mall
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer