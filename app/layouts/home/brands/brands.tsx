import Image from "next/image"
import Marquee from "react-fast-marquee"
import styles from './brands.module.css'

import Brand1 from '@/public/images/brand-01.png'
import Brand2 from '@/public/images/brand-02.png'
import Brand3 from '@/public/images/brand-03.png'
import Brand4 from '@/public/images/brand-04.png'
import Brand5 from '@/public/images/brand-05.png'
import Brand6 from '@/public/images/brand-06.png'
import Brand7 from '@/public/images/brand-07.png'
import Brand8 from '@/public/images/brand-08.png'

const Brands = () => {
  return (
    <section className="home-wrapper-2 marquee-wrapper py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className={`${styles.marquee_inner_wrapper} card-wrapper`}>
                        <Marquee className="d-flex">
                            <div className="mx-4 w-25">
                                <Image src={Brand1} alt="brand" />
                            </div>
                            <div className="mx-4 w-25">
                                <Image src={Brand2} alt="brand" />
                            </div>
                            <div className="mx-4 w-25">
                                <Image src={Brand3} alt="brand" />
                            </div>
                            <div className="mx-4 w-25">
                                <Image src={Brand4} alt="brand" />
                            </div>
                            <div className="mx-4 w-25">
                                <Image src={Brand5} alt="brand" />
                            </div>
                            <div className="mx-4 w-25">
                                <Image src={Brand6} alt="brand" />
                            </div>
                            <div className="mx-4 w-25">
                                <Image src={Brand7} alt="brand" />
                            </div>
                            <div className="mx-4 w-25">
                                <Image src={Brand8} alt="brand" />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brands