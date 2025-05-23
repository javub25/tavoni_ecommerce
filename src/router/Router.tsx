import {BrowserRouter, Routes, Route } from "react-router"
import {Header} from "@/layouts/Header.tsx"
import { lazy} from "react"
import {SuspenseWrapper} from "@/router/SuspenseWrapper.tsx"

export const Router = () => 
{
    const Store = lazy(() => import('@/features/Store/components/Store'));
    const Cart = lazy(() => import('@/features/Cart/components/Cart'));

    return (
        <BrowserRouter>
            <Header />
                <section className="px-5 py-10">
                        <Routes>
                            <Route path="/" element={
                                <SuspenseWrapper>
                                    <Store />
                                </SuspenseWrapper>} 
                            />
                            <Route path="/cart" element={
                                <SuspenseWrapper>
                                    <Cart />
                                </SuspenseWrapper>} 
                            />
                            <Route path="*" element={
                                <SuspenseWrapper>
                                    <Store />
                                </SuspenseWrapper>}
                            />
                        </Routes>
                </section>
            </BrowserRouter>
        )
}