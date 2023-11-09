import Image from "next/image"

import Service from '@/public/images/service.png'
import Service3 from '@/public/images/service-03.png'
import Service4 from '@/public/images/service-04.png'
import Service5 from '@/public/images/service-05.png'

const Services = () => {
  return (
    <section className="home-wrapper-2 pt-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="services d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-15">
                            <Image src={Service} alt="services" />
                            <div className="d-flex flex-column">
                                <h6 className="mb-1">Free Shipping</h6>
                                <p className="mb-0">From all orders over $100</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-15">
                            <Image src={Service3} alt="services" />
                            <div className="d-flex flex-column">
                                <h6 className="mb-1">Support 24/7</h6>
                                <p className="mb-0">Shop with an expert</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-15">
                            <Image src={Service4} alt="services" />
                            <div className="d-flex flex-column">
                                <h6 className="mb-1">Afforable Prices</h6>
                                <p className="mb-0">Get Factory default price</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-15">
                            <Image src={Service5} alt="services" />
                            <div className="d-flex flex-column">
                                <h6 className="mb-1">Secure Payments</h6>
                                <p className="mb-0">100% Protected Payments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services