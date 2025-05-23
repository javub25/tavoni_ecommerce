import Confetti from 'react-confetti';
import { useConfetti } from '@/features/Confetti/hooks/useConfetti';

export const OrderSuccessConfetti = () => {
    const { width, height } = useConfetti();
 
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
        <Confetti
            width={width}
            height={height}
            numberOfPieces={500}
            recycle={false}
        />
    </div>
  );
};
