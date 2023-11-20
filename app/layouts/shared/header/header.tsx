import Image from 'next/image'
import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'

// Images
import Wishlist from "@/public/images/wishlist.svg"
import User from "@/public/images/user.svg"
import Cart from "@/public/images/cart.svg"
import Menu from "@/public/images/menu.svg"

const Header = () => {
  return (
    <header>
        <div className='header-top py-3'>
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-6">
                        <p className="text-start text-white mb-0">
                            Free Shipping Over $100 & Free Returns
                        </p>
                    </div>
                    <div className="col-6">
                        <p className="text-end text-white mb-0">
                            Hotline:&nbsp; 
                            <a className="text-white" href="tel:+234 7037648977">
                                +234 7037648977
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-center py-3">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-2">
                        <h4 className="mb-0">
                            <Link href='/' className="text-white">Online Mall</Link>
                        </h4>
                    </div>
                    <div className="col-5">
                        <div className="input-group">
                            <input 
                                type="text" 
                                name='searchProductValue'
                                id='searchProductValue'
                                className="form-control py-2" 
                                placeholder="Search Product..." 
                                aria-label="Search Product..." 
                                aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text p-3" id="basic-addon2">
                                <BsSearch className="fs-6" />
                            </span>
                        </div>

                    </div>
                    <div className="col-5">
                        <div className="header-center-links d-flex align-items-center justify-content-between">
                            <div>
                                <Link href='/wishlist' className="d-flex align-items-center gap-10">
                                    <Image className="header-center-links-icon" src={Wishlist} alt="wishlist" />
                                    <p className="text-white mb-0">Wishlist</p>
                                </Link>
                            </div>
                            <div>
                                <Link href='/auth/login' className="d-flex align-items-center gap-10">
                                    <Image className="header-center-links-icon" src={User} alt="user" />
                                    <p className="text-white mb-0">My Account</p>
                                </Link>
                            </div>
                            <div>
                                <Link href='#' className="d-flex align-items-center">
                                    <div className="position-relative d-flex align-items-center gap-10">
                                        <Image className="header-center-links-icon" src={Cart} alt="cart" />
                                        <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                                            0
                                            <span className="visually-hidden">cart quantity</span>
                                        </span>
                                        <p className="text-white mb-0">$500</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-bottom py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="meun-bottom d-flex align-items-center gap-30">
                            <div>
                                <div className="dropdown">
                                    <button 
                                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                    >
                                        <Image src={Menu} alt='menu' width={20} height={20} /> 
                                        <span className='me-5 d-inline-block'>Shop Categories</span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <Link className="dropdown-item text-white" href="#">Action</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-white" href="#">Another action</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-white" href="#">Something else here</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="menu-links">
                                <div className="d-flex align-items-center gap-15">
                                    <Link href='/'>Home</Link>
                                    <Link href='/collections/store'>Our Store</Link>
                                    <Link href='/blogs'>Blogs</Link>
                                    <Link href='/contact'>Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header