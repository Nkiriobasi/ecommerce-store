"use client"

import Image, { StaticImageData } from 'next/image'
import { Rating } from 'react-simple-star-rating'
import styles from './specialProduct.module.css'

interface SpecialProductPropsType {
    imgSrc: StaticImageData
    brand: string
    title: string
    price: string
}

const SpecialProduct: React.FC<SpecialProductPropsType> = ({ 
    imgSrc, 
    brand, 
    title, 
    price 
  }) => {
  return (
    <div className={`${styles.specialProduct} col-4 px-2`}>
        <div className={`${styles.special_product_card}`}>
            <div className="d-flex justify-content-between">
                <div className="w-50">
                    <Image 
                        src={imgSrc} 
                        alt='special product' 
                        className={`${styles.special_product_img} img-fluid`} 
                    />
                </div>

                <div className={`${styles.special_product_content} w-50`}>
                    <h5 className={`${styles.product_brand} brand`}>{brand}</h5>
                    <h5 className={`${styles.product_title}`}>{title}</h5>
                    <div className="mb-2">
                        <Rating
                            size={24}
                            initialValue={3}
                            readonly={true}
                        />
                    </div>
                    <p className={`${styles.product_price}`}>
                        <span className="red-p">$100</span> &nbsp;
                        <span className="">$200</span>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                        <p className='mb-0'>
                            <b>5</b> days
                        </p>
                        <div className="d-flex align-items-center gap-10">
                            <span className='badge rounded-circle p-2 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-2 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-2 bg-warning'>1</span>
                        </div>
                        <div className="prod-count"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct