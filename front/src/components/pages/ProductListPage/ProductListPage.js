import React, { useMemo } from "react";
import FilterIcon from "../../common/FilterIcon";
import content from "../../../data/content.json";

const categories = content?.categories;

const ProductListPage = ({ categoryType }) => {
  // UseMemo untuk mendapatkan kategori berdasarkan categoryType
  const categoryContent = useMemo(() => {
    return categories?.find((category) => category.code === categoryType) || {};
  }, [categoryType]);

  return (
    <div>
      <div className="flex">
        {/* Sidebar untuk filter */}
        <div className="w-[20%] p-[10px] border rounded-lg m-[20px]">
          <div className="flex justify-between">
            <p className="text-[16px] text-gray-600">Filter</p>
            <FilterIcon />
          </div>

          <div>
            {/* List Kategori */}
            <p className="text-[16px] text-black mt-5">Categories</p>
            <hr />
          </div>
        </div>

        {/* Konten utama */}
        <div className="p-[40px]">
          <p>{categoryContent?.description || "Category not found"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
