/* Sidebar Components */
import SidebarBrand from './SidebarBrand'
import SidebarNav from './SidebarNav'
import Divider from '../Divider'

export default function Sidebar() {
    return(
 
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <SidebarBrand/>
            <Divider extraClass="my-0"/>
            <SidebarNav/>
            <Divider extraClass=""/>
        </ul>
    )
}