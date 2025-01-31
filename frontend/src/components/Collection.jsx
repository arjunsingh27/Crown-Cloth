import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from './Title';
import ProductItem from './ProductItem';

const Collection = ({ defaultCategory }) => {

  console.log("Default Category "+ defaultCategory);

  const { products, showSearch, search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState(defaultCategory);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  // Get subcategories dynamically based on the selected category
  const getSubCategories = () => {
    if (!category) return [];
    const uniqueSubCategories = new Set();
    products
      .filter((product) => product.category === category)
      .forEach((product) => uniqueSubCategories.add(product.subCategory));
    return Array.from(uniqueSubCategories);
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products];
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category && category !== 'Collection') {
      productsCopy = productsCopy.filter((item) => item.category === category);
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let fpCopy = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
 
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch,products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
        {defaultCategory === 'Collection' && (
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? '' : 'hidden'
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {/* Radio buttons to select only one category */}
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="radio"
                  name="category"
                  value="Men"
                  checked={category === 'Men'}
                  onChange={() => setCategory('Men')}
                />
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="radio"
                  name="category"
                  value="Women"
                  checked={category === 'Women'}
                  onChange={() => setCategory('Women')}
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="radio"
                  name="category"
                  value="Kids"
                  checked={category === 'Kids'}
                  onChange={() => setCategory('Kids')}
                />
                Kids
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="radio"
                  name="category"
                  value="Accessories"
                  checked={category === 'Accessories'}
                  onChange={() => setCategory('Accessories')}
                />
                Accessories
              </p>
            </div>
          </div>
        )}

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {getSubCategories().map((subCat) => (
              <p key={subCat} className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={subCat}
                  onChange={toggleSubCategory}
                />
                {subCat}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={defaultCategory!="Collection" ? defaultCategory : "All"} text2={' Collections '} />
          {/* Sort Product */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => {
              setSortType(e.target.value);
            }}
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to high</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
