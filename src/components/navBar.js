import { CartIcon} from '../icons'
import { useSelector } from 'react-redux'

export const NavBar = () => {
  const amount = useSelector((store)=>store.cart.amount)
  return (
    <nav>
      <div className="nav">
        <h3>Reducx toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}