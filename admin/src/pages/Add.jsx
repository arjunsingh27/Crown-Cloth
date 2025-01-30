import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios"; // Ensure axios is installed
import { backendUrl} from "../App";
const Add = ({token}) => {
  const [formData, setFormData] = useState({
    subname: "",
    name: "",
    productdetail: "",
    description: "",
    price: "",
    category: "Men",
    sizes: [],
    subCategory: "Sneakers",
    bestseller: false,
    images: [null, null, null, null],
  });

  const categoryOptions = {
    Men: ["Sneakers", "Boots", "Sandals"],
    Women: ["Heels", "Flats", "Sandals"],
    Kids: ["School Shoes", "Sports Shoes", "Sandals"],
    Accessories: ["Handbags", "Perfume", "Watches"],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...formData.images];
      updatedImages[index] = file; // Store file object for upload
      setFormData((prev) => ({ ...prev, images: updatedImages }));
    }
  };

  const handleSizeToggle = (size) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const payload = new FormData();
    payload.append("subname", formData.subname);
    payload.append("name", formData.name);
    payload.append("productdetail", formData.productdetail);
    payload.append("description", formData.description);
    payload.append("price", formData.price);
    payload.append("category", formData.category);
    payload.append("sizes", JSON.stringify(formData.sizes)); // Convert array to string
    payload.append("subCategory", formData.subCategory);
    payload.append("bestseller", formData.bestseller);

    // Append images
    formData.images.forEach((img, index) => {
      if (img) payload.append(`image${index + 1}`, img);
    });

    try {
      const response = await axios.post(backendUrl+"/api/products/add",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
             token: `${token}`,  
          },
        }
      );

      console.log("Product added successfully:", response.data);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error.response?.data || error);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">Upload Images</p>
        <div className="flex gap-2">
          {formData.images.map((img, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              <img
                className="w-20 h-20 object-cover border"
                src={img ? URL.createObjectURL(img) : assets.upload_area}
                alt="upload preview"
              />
              <input
                type="file"
                id={`image${index + 1}`}
                hidden
                accept="image/*"
                onChange={(e) => handleImageChange(e, index)}
              />
            </label>
          ))}
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product Sub Name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          name="subname"
          placeholder="Type here"
          value={formData.subname}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          name="name"
          placeholder="Type here"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Detail</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          name="productdetail"
          placeholder="Write product details here"
          value={formData.productdetail}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          name="description"
          placeholder="Write description here"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Category</p>
          <select
            className="w-full px-3 py-2"
            name="category"
            value={formData.category}
            onChange={(e) => {
              handleInputChange(e);
              setFormData((prev) => ({
                ...prev,
                subCategory: categoryOptions[e.target.value][0],
              }));
            }}
          >
            {Object.keys(categoryOptions).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="mb-2">Sub Category</p>
          <select
            className="w-full px-3 py-2"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleInputChange}
          >
            {categoryOptions[formData.category].map((subCategory) => (
              <option key={subCategory} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="mb-2">Price</p>
          <input
            type="number"
            className="w-full px-3 py-2 sm:w-[120px]"
            name="price"
            placeholder="25"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Sizes</p>
        <div className="flex gap-2">
          {[6, 7, 8, 9, 10 , "S" , "M" , "L" ].map((size) => (
            <p
              key={size}
              className={`bg-slate-200 px-3 py-1 cursor-pointer ${
                formData.sizes.includes(size) ? "bg-blue-400 text-white" : ""
              }`}
              onClick={() => handleSizeToggle(size)}
            >
              {size}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          name="bestseller"
          checked={formData.bestseller}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              bestseller: e.target.checked,
            }))
          }
        />
        <label htmlFor="bestseller">Add to Best Seller</label>
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        Add Product
      </button>
    </form>
  );
};

export default Add;
