import ProductCard from "@/app/components/productCard/productCard"
import Watch from '@/public/images/watch.jpg'

interface ProductListContainerPropsType {
    grid: number
}

const ProductListContainer: React.FC<ProductListContainerPropsType> = ({ grid }) => {    
  return (
    <div className="product-list">
        <div className="d-flex align-items-center flex-wrap">
            <ProductCard 
                imgSrc={Watch} 
                brand='Havels' 
                title='Kids headphones bulk 10 pack multi colored for students'
                price='$100.00' 
                grid={grid}
            />
            <ProductCard 
                imgSrc={Watch} 
                brand='Havels' 
                title='Kids headphones bulk 10 pack multi colored for students'
                price='$100.00' 
                grid={grid}
            />
            <ProductCard 
                imgSrc={Watch} 
                brand='Havels' 
                title='Kids headphones bulk 10 pack multi colored for students'
                price='$100.00' 
                grid={grid}
            />
            <ProductCard 
                imgSrc={Watch} 
                brand='Havels' 
                title='Kids headphones bulk 10 pack multi colored for students'
                price='$100.00' 
                grid={grid}
            />
        </div>
    </div>
  )
}

export default ProductListContainer