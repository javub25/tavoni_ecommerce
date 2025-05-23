import { useWindowSize } from 'react-use'

export const useConfetti = () => 
{
    const { width, height } = useWindowSize();

     return {width, height}
}
