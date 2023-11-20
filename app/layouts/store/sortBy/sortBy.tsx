"use client"

import { Dispatch, SetStateAction, useState } from "react"
import Image from "next/image"

import Gr2 from "@/public/images/gr2.svg"
import Gr3 from "@/public/images/gr3.svg"
import Gr4 from "@/public/images/gr4.svg"

interface SortByPropsType {
  setGrid: Dispatch<SetStateAction<number>>
}

const SortBy: React.FC<SortByPropsType> = ({ setGrid }) => {
  const [selectedOption, setSelectedOption] = useState<string>('default');

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="filter-sort-grid mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-10">
          <p className="mb-0 d-block" style={{ width: "80px" }}>Sort By:</p>

          <select 
            name="" 
            id="" 
            className="form-control form-select" 
            value={selectedOption} 
            onChange={handleChange}
          >
            <option value="best-selling" defaultValue="best-selling">Best-selling</option>
            <option value="title-ascending">Alphabetically, A-Z</option>
            <option value="title-descending">Alphabetically, Z-A</option>
            <option value="price-ascending">Price, low to high</option>
            <option value="price-descending">Price, high to low</option>
            <option value="date-ascending">Date, old to new</option>
            <option value="date-descending">Date, new to old</option>
          </select>
        </div>

        <div className="d-flex align-items-center gap-10">
          <p className="total-products mb-0">21 Products</p>
          <div className="d-flex align-items-center gap-10">
            <span
              onClick={() => setGrid(3)} 
              className="d-inline-flex align-items-center justify-content-center grid-img-container"
            >
              <Image src={Gr4} alt="grid" className="d-inline-block img-fluid grid-img" />
            </span>
            <span
              onClick={() => setGrid(4)} 
              className="d-inline-flex align-items-center justify-content-center grid-img-container"
            >
              <Image src={Gr3} alt="grid" className="d-inline-block img-fluid grid-img" />
            </span>
            <span
              onClick={() => setGrid(6)} 
              className="d-inline-flex align-items-center justify-content-center grid-img-container"
            >
              <Image src={Gr2} alt="grid" className="d-inline-block img-fluid grid-img" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortBy