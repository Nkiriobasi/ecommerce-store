"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image, { StaticImageData } from 'next/image'
import { Rating } from 'react-simple-star-rating'
import styles from './productCard.module.css'

import addCart from '@/public/images/add-cart.svg'
import View from '@/public/images/view.svg'
import Prodcompare from '@/public/images/prodcompare.svg'
import Wish from '@/public/images/wish.svg'

interface ProductCardPropsType {
  imgSrc: StaticImageData
  brand: string
  title: string
  price: string
  grid?: number
}

const ProductCard: React.FC<ProductCardPropsType> = ({ 
  imgSrc, 
  brand, 
  title, 
  price,
  grid
}) => {
  const pathname = usePathname()

  return (
    <div className={`${pathname == '/store' ? `gr-${grid}` : 'col-3'} p-2`}>
      <div className={`${styles.product_card} position-relative`}>
        <div className={`${styles.wishlist} position-absolute`}>
          <Link href='' className={`${styles.action_bar_icon}`}>
            <Image src={Wish} alt='compare' />
          </Link>
        </div>

        <div className={styles.product_image}>
          <Image src={imgSrc} alt='product' className='img-fluid' style={{ width: '100%'}} />
        </div>

        <div className={`${styles.product_details}`}>
          <h5 className={`${styles.product_brand} brand`}>{brand}</h5>
          <h5 className={`${styles.product_title}`}>{title}</h5>
          <div className="mb-2">
            <Rating
              size={24}
              initialValue={3}
              readonly={true}
            />
          </div>
          <p className={`${styles.product_price}`}>{price}</p>
        </div>

        <div className={`${styles.action_bar} position-absolute`}>
          <div className="d-flex flex-column gap-10">
            <Link href='' className={`${styles.action_bar_icon}`}>
              <Image src={Prodcompare} alt='compare' />
            </Link>
            <Link href='' className={`${styles.action_bar_icon}`}>
              <Image src={View} alt='view' />
            </Link>
            <Link href='' className={`${styles.action_bar_icon}`}>
              <Image src={addCart} alt='add cart' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard