import SpecialProduct from "@/app/components/specialProduct/specialProduct"
import styles from './specialProducts.module.css'

const SpecialProducts = () => {
  return (
    <section className='home-wrapper-2'>
      <div className="container-xxl">
        <div className="col-12">
          <h4 className="section-heading">Special Products</h4>
        </div>

        <div className={`${styles.special_product_container} row`}>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </div>
    </section>
  )
}

export default SpecialProducts