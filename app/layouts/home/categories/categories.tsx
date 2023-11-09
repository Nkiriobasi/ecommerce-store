import Image from "next/image"

import Camera from '@/public/images/camera.jpg'
import Laptop from '@/public/images/laptop.jpg'
import Homeapp from '@/public/images/homeapp.jpg'
import Headphone from '@/public/images/headphone.jpg'
import Speaker from '@/public/images/speaker.jpg'
import Accessories from '@/public/images/acc.jpg'
import Tv from '@/public/images/tv.jpg'

const Categories = () => {
  return (
    <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                        <div className="d-flex gap-30 align-items-center justify-content-center">
                            <div className="d-flex flex-column">
                                <h6 className="mb-0">Laptops</h6>
                                <p className="mb-0">6 Items</p>
                            </div>
                            <Image src={Laptop} alt="Laptop" />
                        </div>

                        <div className="d-flex gap-30 align-items-center justify-content-center">
                            <div className="d-flex flex-column">
                                <h6 className="mb-0">Smart Television</h6>
                                <p className="mb-0">10 Items</p>
                            </div>
                            <Image src={Tv} alt="tv" />
                        </div>

                        <div className="d-flex gap-30 align-items-center justify-content-center">
                            <div className="d-flex flex-column">
                                <h6 className="mb-0">Cameras & Videos</h6>
                                <p className="mb-0">12 Items</p>
                            </div>
                            <Image src={Camera} alt="Cameras & Videos" />
                        </div>

                        <div className="d-flex gap-30 align-items-center justify-content-center">
                            <div className="d-flex flex-column">
                                <h6 className="mb-0">Home appliances</h6>
                                <p className="mb-0">13 Items</p>
                            </div>
                            <Image src={Homeapp} alt="Home Appliances" />
                        </div>

                        <div className="d-flex gap-30 align-items-center justify-content-center">
                            <div className="d-flex flex-column">
                                <h6 className="mb-0">HeadPhones</h6>
                                <p className="mb-0">13 Items</p>
                            </div>
                            <Image src={Headphone} alt="HeadPhones" />
                        </div>

                        <div className="d-flex gap-30 align-items-center justify-content-center">
                            <div className="d-flex flex-column">
                                <h6 className="mb-0">Portable Speakers</h6>
                                <p className="mb-0">13 Items</p>
                            </div>
                            <Image src={Speaker} alt="Portable Speakers" />
                        </div>

                        <div className="d-flex gap-30 align-items-center justify-content-center">
                            <div className="d-flex flex-column">
                                <h6 className="mb-0">Accessories</h6>
                                <p className="mb-0">13 Items</p>
                            </div>
                            <Image src={Accessories} alt="Accessories" />
                        </div>

                        <div className="d-flex gap-30 align-items-center justify-content-center">
                            <div className="d-flex flex-column">
                                <h6 className="mb-0">Home appliances</h6>
                                <p className="mb-0">13 Items</p>
                            </div>
                            <Image src={Homeapp} alt="home appliances" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories