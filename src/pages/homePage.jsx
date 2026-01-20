import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from "./homeContent";


export default function HomePage(){
    return(
        <div className="w-full h-full overflow-y-scroll max-h-full">
            <Header/>
            <div className="w-full min-h-[calc(100%-100px)]">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    
                </Routes>
            </div>
        </div>
    )
}