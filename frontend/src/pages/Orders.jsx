import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    console.log("Load Order Data Is Called");

    if (!token) {
      console.warn("Token is missing. Skipping API request.");
      return;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      let allOrdersItem = [];
      response.data.orders.forEach((order) => {
        order.items.forEach((item) => {
          item["status"] = order.status;
          item["payment"] = order.payment;
          item["paymentMethod"] = order.paymentMethod;
          item["date"] = order.date;
          allOrdersItem.push(item);
        });
      });

      console.log("All Order Data:", allOrdersItem);
      setOrderData(allOrdersItem); // ✅ Corrected: Now updating state
    } catch (error) {
      console.error(
        "Error fetching order data:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={item.image?.[0] || "/placeholder.jpg"} // ✅ Fallback image
                className="w-16 sm:w-20"
                alt={item.name || "Product Image"}
              />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray">
                  <p className="text-lg">
                    {currency}
                    {item.price} {/* ✅ Fixed: changed 'prive' to 'price' */}
                  </p>
                  <p>Quantity: {item.quantity || 1}</p>
                  <p>Size: {item.size || "M"}</p>
                </div>
                <p>
                  Date:{" "}
                  <span className="text-gray-400">
                    {new Date(item.date).toDateString() || "Unknown"}
                  </span>
                </p>
                <p>
                  Payment:{" "}
                  <span className="text-gray-400">
                    {item.paymentMethod || "Not Available"}
                  </span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">
                  {item.status || "Pending"}
                </p>
              </div>
              <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
