

const ProductTags = () => {
  return (
    <div className='filter-card'>
      <h3 className="filter-title">Products Tags</h3>

      <div>
        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
          <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
          <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
          <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
          <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
        </div>
      </div>
    </div>
  )
}

export default ProductTags