import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './component/Navbar.jsx'
import PortfolioSection from './component/Work.jsx'
import Work1 from './component/Work1.jsx'
import Contact from './component/Contact.jsx'
import LiquidProgress from './component/Man';
import About from './component/About.jsx'
import ProjectPage from './projectpage/Projectcard.jsx'
import Layout from './Layout.jsx'
import './App.css'
import Stair from './component/common/Stair.jsx'
import SideNav from './component/Sidebar.jsx'
import Navcontext from './component/Navcontext.jsx'
import Menubar from './Menubar.jsx'
import "./Layout.css"
import New from './component/new.jsx'
import Home from './component/Home.jsx'



createRoot(document.getElementById('root')).render(
<BrowserRouter>
 <Navcontext>
<div className="bg-[#020617]">
 <Stair>

<App/>
<Layout/>
  </Stair>

</div>
</Navcontext>
</BrowserRouter>
)