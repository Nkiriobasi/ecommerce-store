import { IoHome } from "react-icons/io5";
import { FaPhone, FaCalendar } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contact-inner-wrapper d-flex justify-content-between">
        <div className="">
            <h3 className="contact-title mb-4">Contact</h3>

            <form className='d-flex flex-column gap-15'>
                <div className='d-inline-flex align-items-center'>
                    <input 
                        type="text" 
                        placeholder='Name'
                        name='fullName'
                        id='fullName'
                        className='form-control' 
                    />
                </div>
                <div className='d-inline-flex align-items-center'>
                    <input 
                        type="email" 
                        placeholder='Email'
                        name='email'
                        id='email'
                        className='form-control' 
                    />
                </div>
                <div className='d-inline-flex align-items-center'>
                    <input 
                        type="tel" 
                        placeholder='Phone number'
                        name='phoneNumber'
                        id='phoneNumber'
                        className='form-control' 
                    />
                </div>
                <div className='d-inline-flex align-items-center'>
                    <textarea 
                        name="comment" 
                        placeholder='Comment'
                        className='w-100 form-control' 
                        rows={5}
                        id="comment"
                    ></textarea>
                </div>
                <div className='d-inline-flex align-items-center'>
                    <button className='button border-0'>Submit</button>
                </div>
            </form>
        </div>

        <div className="">
            <h3 className="contact-title mb-4">Get in touch with us</h3>

            <div className="">
                <ul className="ps-0">
                    <li className="mb-4 d-flex gap-15 align-items-center">
                        <IoHome className="fs-5" />
                        <address className="mb-0">No. 1234 Aje Lagos, Nigeria.</address>
                    </li>
                    <li className="mb-4 d-flex gap-15 align-items-center">
                        <FaPhone className="fs-5" />
                        <a className="" href="tel:+234 7037648977">
                            +234 7037648977
                        </a>
                    </li>
                    <li className="mb-4 d-flex gap-15 align-items-center">
                        <MdEmail className="fs-5" />
                        <a 
                            href="mailto:exampleemail@gmail.com" 
                            className="d-block mb-0"
                        >
                            exampleemail@gmail.com
                        </a>
                    </li>
                    <li className="mb-4 d-flex gap-15 align-items-center">
                        <FaCalendar className="fs-5" />
                        <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ContactUs