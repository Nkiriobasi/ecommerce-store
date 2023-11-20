

const FilterBy = () => {
  return (
    <div className='filter-card mb-3'>
      <h3 className="filter-title">Filter By</h3>

      <div>
        <h5 className="sub-title">Availability</h5>
        <div>
          <div className="form-check d-flex align-items-center gap-10 mb-0">
            <input type="checkbox" className="form-check-input" id="inStock" name="inStock" />
            <label htmlFor="inStock" className="form-check-label">In Stock (1)</label>
          </div>
          <div className="form-check d-flex align-items-center gap-10 mb-0">
            <input type="checkbox" className="form-check-input" id="outOfStock" name="outOfStock" />
            <label htmlFor="outOfStock" className="form-check-label">Out of Stock (0)</label>
          </div>
        </div>

        <h5 className="sub-title mt-3">Price</h5>
        <div className="d-flex align-items-center gap-10">
          <div className="form-floating">
            <input type="text" className="form-control py-1" id="floatingInput1" placeholder="From" />
            <label htmlFor="floatingInput1">From</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control py-1" id="floatingInput2" placeholder="To" />
            <label htmlFor="floatingInput2">To</label>
          </div>
        </div>

        <h5 className="sub-title mt-3">Colors</h5>
        <div>
          <ul className="colors ps-0">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <h5 className="sub-title mt-3">Size</h5>
        <div>
          <div className="form-check d-flex align-items-center gap-10 mb-0">
            <input type="checkbox" className="form-check-input" id="small" name="small" />
            <label htmlFor="small" className="form-check-label">S (2)</label>
          </div>
          <div className="form-check d-flex align-items-center gap-10 mb-0">
            <input type="checkbox" className="form-check-input" id="medium" name="medium" />
            <label htmlFor="medium" className="form-check-label">M (0)</label>
          </div>
          <div className="form-check d-flex align-items-center gap-10 mb-0">
            <input type="checkbox" className="form-check-input" id="large" name="large" />
            <label htmlFor="large" className="form-check-label">L (0)</label>
          </div>
          <div className="form-check d-flex align-items-center gap-10 mb-0">
            <input type="checkbox" className="form-check-input" id="extra-large" name="extra-large" />
            <label htmlFor="extra-large" className="form-check-label">xL (0)</label>
          </div>
          <div className="form-check d-flex align-items-center gap-10 mb-0">
            <input type="checkbox" className="form-check-input" id="extra-extra-large" name="extra-extra-large" />
            <label htmlFor="extra-extra-large" className="form-check-label">xxL (0)</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBy