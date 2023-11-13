import SpecialProduct from "@/app/components/specialProduct/specialProduct"
import Speaker from '@/public/images/speaker.jpg'
import styles from './specialProducts.module.css'

const SpecialProducts = () => {
  return (
    <section className='home-wrapper-2'>
      <div className="container-xxl">
        <div className="col-12">
          <h4 className="section-heading">Special Products</h4>
        </div>

        <div className={`${styles.special_product_container} row`}>
          <SpecialProduct
            imgSrc={Speaker} 
            brand='Havels' 
            title='Samsung Galaxy Note10+ Mobile Phone'
            price='$100.00'  
          />
          <SpecialProduct
            imgSrc={Speaker} 
            brand='Havels' 
            title='Samsung Galaxy Note10+ Mobile Phone'
            price='$100.00'  
          />
          <SpecialProduct
            imgSrc={Speaker} 
            brand='Havels' 
            title='Samsung Galaxy Note10+ Mobile Phone'
            price='$100.00'  
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialProducts