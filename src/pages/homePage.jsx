import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from "./homeContent";
import AboutPage from "./aboutPage";
import ContactPage from "./contactPage";
import NotFoundPage from "./notFoundPage";
import ProductPage from "./productPage";
import ProductOverview from "./productOverview";
import CartPage from "./cart";
import CheckoutPage from "./checkOut";
import OrdersPage from "./ordersPage";

export default function HomePage(){
    return(
        <div className="w-full h-full overflow-y-scroll max-h-full">
            <Header/>
            <div className="w-full min-h-[calc(100%-100px)]">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/overview/:productID" element={<ProductOverview/>} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                </Routes>
            </div>
        </div>
    )
}