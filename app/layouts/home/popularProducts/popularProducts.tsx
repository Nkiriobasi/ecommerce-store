import ProductCard from '../../../components/productCard/productCard'
import Watch from '@/public/images/watch.jpg'
import styles from './popularProducts.module.css'


const PopularProducts = () => {
  return (
    <section className="home-wrapper-2 popular-wrapper py-5">
        <div className="container-xxl">
            <div className="col-12">
                <h4 className="section-heading">Our Popular Products</h4>
            </div>

            <div className={`${styles.popular_product_container} row`}>
                <ProductCard 
                    imgSrc={Watch} 
                    brand='Havels' 
                    title='Kids headphones bulk 10 pack multi colored for students'
                    price='$100.00' 
                />
                <ProductCard 
                    imgSrc={Watch} 
                    brand='Havels' 
                    title='Kids headphones bulk 10 pack multi colored for students'
                    price='$200.00' 
                />
                <ProductCard 
                    imgSrc={Watch} 
                    brand='Havels' 
                    title='Kids headphones bulk 10 pack multi colored for students'
                    price='$300.00' 
                />
                <ProductCard 
                    imgSrc={Watch} 
                    brand='Havels' 
                    title='Kids headphones bulk 10 pack multi colored for students'
                    price='$400.00' 
                />
            </div>
        </div>
    </section>
  )
}

export default PopularProducts