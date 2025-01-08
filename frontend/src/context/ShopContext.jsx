import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets"; // Ensure this path is correct

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const currency = "₹";
    const deliveryFee = 10;

    const value = {
        products,
        currency,
        deliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
