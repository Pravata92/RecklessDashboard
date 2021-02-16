import { NavItems } from './NavItems'
import Divider from '../Divider'
import Heading from '../Heading'
export default function SidebarNav (){
    return(
        <div>
            <li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span> Dashboard</span></a>
			</li>
            <Divider extraClass=""/>
            <Heading/>
            {NavItems.map(( item , index ) => 
                <li className={item.cNameList} key={index}>
                    <a className={item.CNameLink} href={item.url}>
                        <i className={item.i}></i>
                        <span> {item.title}</span></a>
                </li>
            )}
        </div>
    )
}