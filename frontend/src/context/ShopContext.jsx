import { createContext,useEffect,useState } from "react";
// import { products } from "../assets/frontend_assets/assets";
    
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios"
export const ShopContext = createContext();

const currency = '₹';
const deliveryFee = 50;
const backendUrl = import.meta.env.VITE_BACKEND_URL;


const ShopContextProvider = ({ children }) => { // Destructure children from props
    const [search, setsearch] = useState();
    const [showSearch, setshowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products,setProducts] = useState([])
    const [token,setToken]=useState("");
    

    const navigate =  useNavigate();


    
//    Code Improvement Needed 1

    const addToCart = async (itemId, size)=>{
        if(!size){
            toast.error("Add the Size");
            return;
        }else{
            toast.success("Item added to cart");
                
        }
        

        let cartData = structuredClone(cartItems);
         
        if(cartData[itemId]){
           
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
                
            }
            else{
                cartData[itemId][size] = 1;
            }
            
        }
        else{
            cartData[itemId]= {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
        if(token){
            try {
                await axios.post(backendUrl + '/api/cart/add',{itemId,size},{headers:{token}})
            } catch (error) {
                console.log(error)
                toast.error(error.message);
            }
        }
    }
  
    const getCartCount = () => {
        return Object.keys(cartItems).reduce((totalCount, itemId) => {
          const itemSizes = Object.values(cartItems[itemId]);
          const itemCount = itemSizes.reduce((sizeCount, size) => sizeCount + (size > 0 ? size : 0), 0);
          return totalCount + itemCount;
        }, 0);
      };
     
      const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
    
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    
        if (token) {
          try {
            await axios.post(backendUrl+ '/api/cart/update', {itemId,size,quantity}, {headers:{token}})
    
          } catch (error) {
             console.log(error);
            toast.error(error.message)
          }
        }
    
      }

    const getCartAmount =   () => 
    {
        let totalAmount  = 0 ;
        for(const items in cartItems){
             let itemInfo = products.find((product)=>product._id === items);
             for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0 ){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }catch(error){

                }
             }
        }
        console.log(totalAmount);
        return totalAmount;
    }
    

    const getProductsData = async () => {
        console.log("I got runned up ");
        try {
            const response = await axios.get(backendUrl+'/api/products/list');
            setProducts(response.data.products);
            console.log("Mongodb", response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    
    const getUserCart = async (token)=>{
        try {
          const response = await axios.post(backendUrl+'/api/cart/get', {}, {headers:{token}})
          if (response.data.success) {
            setCartItems(response.data.cartData)
          }
        } catch (error) {
          console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
          setToken(localStorage.getItem('token'))
          getUserCart(localStorage.getItem('token'))
        }
      },[])

      useEffect(() => {
        if (token) {
            getUserCart(token);
        }
    }, [token]);
    
    
    // useEffect(()=>{
    //   console.log(cartItems)
    // },[cartItems]);

    const value = {
        products,
        currency,
        deliveryFee,
        search,
        setsearch,
        showSearch,
        setshowSearch,
        cartItems,
        setCartItems,
        addToCart,
        backendUrl,
        getCartCount,
        updateQuantity,
        setToken,
        token,
        getCartAmount, navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {children}  
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;