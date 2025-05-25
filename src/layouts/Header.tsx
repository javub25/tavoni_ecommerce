import shoppingCart from "@/features/Cart/assets/img/shopping-cart.svg"
import store from "@/features/Store/assets/img/store.svg"
import {Link} from "react-router"
import { useCartContext } from "@/contexts/Cart-context";
import { useLocalStorage } from "@/features/Cart/hooks/useLocalStorage";


export const Header = () => {

    const {cart, setCart} = useCartContext();
    useLocalStorage({cart, setCart});

    return (
        <header className="sticky top-0 z-20 bg-white">
            <nav className="navbar border-radius-sm shadow p-4 ">
                <ul className="flex items-center justify-between">
                    <li>
                        <h1 className="text-xl font-bold text-black">Tavoni</h1>
                    </li>
                    <li>
                        <ul className="flex items-center justify-between gap-3">
                            <li>
                                <Link to="/">
                                    <img src={store} alt="Store icon" className="w-7 h-7" />
                                </Link>
                            </li>
                            <li className="flex items-center py-3 relative">
                                <Link to="/cart">
                                    <img src={shoppingCart} alt="Cart Icon" className="w-7 h-7"/>                                    
                                </Link>
                                <ul className="bg-[#dc2626] px-2 rounded-full absolute top-0 right-0">
                                    <li>
                                        <span className="font-bold text-white text-center text-xs">{cart.length}</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}; 