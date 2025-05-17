import './index.css'
import { Router } from '@/router/Router.tsx'
import { CartProvider } from '@/contexts/Cart-context.tsx'


function App() {
  return (
    <main>
       <CartProvider>
        <Router />
      </CartProvider>
    </main>
  )
}

export default App
