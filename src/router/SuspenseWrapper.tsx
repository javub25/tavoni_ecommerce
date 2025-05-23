import { Loader } from "@/features/Store/components/Loader"
import { Suspense } from "react"

export const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  );
};