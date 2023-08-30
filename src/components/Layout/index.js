import './index.scss';
import SideBar from '../Sidebar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
    <div className='App'>
        <SideBar/>
        <div className='page'> 
            {/* <span className='tags top-tags'> &lt;html&gt;
             <br/>
            <span className='top-tag-html'> &lt;body&gt;</span> */}
            {/* </span> */}
            <Outlet/>
            
            {/* <span className='tags bottom-tags'> &lt;/body&gt;
            <br/>
            <span className='bottom-tag-html'> &lt;/html&gt;</span> */}
            
            {/* </span>   */}
        </div>
        </div>
    )
}

export default Layout