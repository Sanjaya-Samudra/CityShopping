import { Route, Routes } from "react-router-dom";

import Home from "./homeContent";


export default function HomePage(){
    return(
        <div className="w-full h-full overflow-y-scroll max-h-full">
            <Header/>
            <div className="w-full min-h-[calc(100%-100px)]">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/overview/:productID" element={<ProductOverview/>} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    )
}