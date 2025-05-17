import { ProductQuantityCounterProps } from "@/features/Cart/types/Cart"

export const ProductQuantityCounter = ({currentQuantity, onIncrease, onDecrease}: ProductQuantityCounterProps ) => {
    return (
        <ul className="flex items-center justify-between w-full mb-1">
            <li>
                <button className="flex items-center justify-center px-2 cursor-pointer" onClick={onDecrease}>-</button>
            </li>
            <li>
                <span className="w-8 text-center text-sm">{currentQuantity}</span>
            </li>
            <li>
                <button className="flex items-center justify-center px-2 cursor-pointer" onClick={onIncrease}>+</button>
            </li>
        </ul>
    )
}