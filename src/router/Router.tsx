import {BrowserRouter, Routes, Route } from "react-router"
import {Header} from "@/layouts/Header.tsx"
import { Cart } from "@/features/Cart/components/Cart.tsx"
import { Store } from "@/features/Store/components/Store.tsx"


export const Router = () => 
{
    return (
        <BrowserRouter>
            <Header />
                <section className="px-5 pt-10">
                    <Routes>
                        <Route path="/" element={<Store />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </section>
            </BrowserRouter>
        )
}