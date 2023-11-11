"use client"

import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import styles from './specialProduct.module.css'

import Speaker from '@/public/images/speaker.jpg'

const SpecialProduct = () => {
  return (
    <div className={`${styles.specialProduct} col-4 px-2`}>
        <div className={`${styles.special_product_card}`}>
            <div className="d-flex justify-content-between">
                <div className="w-50">
                    <Image 
                        src={Speaker} 
                        alt='special product' 
                        className={`${styles.special_product_img}`} 
                    />
                </div>

                <div className={`${styles.special_product_content} w-50`}>
                    <h5 className={`${styles.product_brand} brand`}>Havels</h5>
                    <h5 className={`${styles.product_title}`}>Samsung Galaxy Note10+ Mobile Phone</h5>
                    <div className="mb-2">
                        <Rating
                            size={24}
                            initialValue={3}
                            readonly={true}
                        />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct