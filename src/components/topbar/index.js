/* Topbar Components */
import Button from './Button'
import Navbar from './Navbar'

export default function Topbar() {
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <Button/> 
            <Navbar/>
        </nav>
    )
}