import './Header.scss'
import logo from '../images/LOGOTYPE.png'

export default function Header() {
  return (
    <>
      <header className='headerheader'>
        <img src={logo} alt="" />
        <nav>
            <ul>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Artists</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

        </nav>
        <button><h5>Buy Template</h5></button>
      </header>
    </>
  )
}
