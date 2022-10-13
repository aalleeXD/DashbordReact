import './Navbar.css';


const Navbar = ({sidebarOpen, opensidebar}) => {
    return (
        <nav className="navbar">
            <div className= "nav_icon" onclick ={()=>opensidebar() }>
                <i className= "fa fa_icon" aria-hidden= "true"></i>
            </div>

            <div className = "navbar__left">
                <a href="#">Produtos</a>
                <a href= "#">Usuarios</a>
                <a href= "#" className= "active_link">Admin</a>
            </div>

            <div className = "navbar__rigth">
                <a href ="#">
                    <i className= "fa fa-seach"></i>
                </a>

                <a href="#">
                    <i className= "fa fa-clock-o"></i>
                </a>

                
            </div>
        </nav>
    )
}
export default Navbar