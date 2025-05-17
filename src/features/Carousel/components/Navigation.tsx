import { PrevButton } from "@/features/Carousel/components/PrevButton"
import { NextButton } from "@/features/Carousel/components/NextButton"
export const Navigation = () => 
{
    return (
        <ul className="grid grid-cols-2 gap-4 w-[15rem] mx-auto py-15 place-items-center">
            <li>
                <PrevButton />
            </li>
            <li>
                <NextButton />
            </li>
        </ul>
    )
}