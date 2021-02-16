import { UserData } from './UserData'

export default function Navbar(){
    return( 
        <ul className="navbar-nav ml-auto">
           <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{UserData.title}</span>
                    <img className="img-profile rounded-circle" src={UserData.avatar} width="60"/>
                </a>
            </li>
        </ul>     
    )
}