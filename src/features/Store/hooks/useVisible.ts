import { useState } from 'react';
export const useVisible = () => 
{
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return {isVisible, setIsVisible}
}