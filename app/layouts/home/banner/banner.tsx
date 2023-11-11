import Image from "next/image"
import Link from "next/link"

import MainBanner1 from '@/public/images/main-banner-1.jpg'
import MainBanner from '@/public/images/main-banner.jpg'

const Banner = () => {
  return (
    <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                    <div className="main-banner position-relative">
                        <Image 
                            src={MainBanner1} 
                            className="img-fluid rounded-3" 
                            alt="main banner" 
                            priority
                        />
                        <div className="main-banner-content position-absolute">
                            <h4>SUPERCHARGED FOR PROS.</h4>
                            <h5>iPad S13+ Pro.</h5>
                            <p>From $999.00 or $41.62/mo.</p>
                            <Link href='' className="button">BUY NOW</Link>
                        </div>
                    </div>
                </div>
                
                <div className="col-6">
                    <div className="main-banner position-relative">
                        <Image 
                            src={MainBanner} 
                            className="img-fluid rounded-3" 
                            alt="main banner" 
                            priority
                        />
                        <div className="main-banner-content position-absolute">
                            <h4>SUPERCHARGED FOR PROS.</h4>
                            <h5>iPad S13+ Pro.</h5>
                            <p>From $999.00 or $41.62/mo.</p>
                            <Link href='' className="button">BUY NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner