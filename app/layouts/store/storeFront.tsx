"use client"

import { useState } from "react"

import BreadCrumb from "@/app/components/breadCrumb/breadCrumb"
import ShopBy from "./shopBy/shopBy"
import ProductTags from "./productTags/productTags"
import FilterBy from "./filterBy/filterBy"
import SortBy from "./sortBy/sortBy"
import ProductListContainer from "./productListContainer/productListContainer"

const StoreFront = () => {
  const [grid, setGrid] = useState<number>(3);

  return (
    <>
        <BreadCrumb title="Our Store" />

        <div className="home-wrapper-2 store-wrapper py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <ShopBy />
                        <FilterBy />
                        <ProductTags />
                    </div>

                    <div className="col-9">
                        <SortBy setGrid={setGrid} />
                        <ProductListContainer grid={grid} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default StoreFront