import ProductCard from '../../../components/productCard/productCard'
import Watch from '@/public/images/watch.jpg'
import styles from './featuredCollections.module.css'


const FeaturedCollections = () => {
  return (
    <section className="home-wrapper-2 featured-wrapper py-5">
        <div className="container-xxl">
            <div className="col-12">
                <h4 className="section-heading">Featured Collections</h4>
            </div>

            <div className={`${styles.featured_product_container} row`}>
                <ProductCard 
                    imgSrc={Watch} 
                    productBrand='Havels' 
                    productTitle='Kids headphones bulk 10 pack multi colored for students'
                    product_price='$100.00' 
                />
                <ProductCard 
                    imgSrc={Watch} 
                    productBrand='Havels' 
                    productTitle='Kids headphones bulk 10 pack multi colored for students'
                    product_price='$200.00' 
                />
                <ProductCard 
                    imgSrc={Watch} 
                    productBrand='Havels' 
                    productTitle='Kids headphones bulk 10 pack multi colored for students'
                    product_price='$300.00' 
                />
                <ProductCard 
                    imgSrc={Watch} 
                    productBrand='Havels' 
                    productTitle='Kids headphones bulk 10 pack multi colored for students'
                    product_price='$400.00' 
                />
            </div>
        </div>
    </section>
  )
}

export default FeaturedCollections