import './Sidebar.css';

//import logo from '../../assets/logo';


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive": ""} id="sidebar" >
            <div className="sidebar__title">
                <div className="sidebar__img"> 
                    
                    <h1>ale</h1>
                </div>

                <i
                onClick={{} = closeSidebar()}
                className= "fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>

            </div>
            <div className="sidebar__menu">
                <div className= "sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar__link">
                <i className="fa fa-tachometer"></i>
                    <a href="#">Area administrativa</a>
                </div>

                <div className="sidebar__link">
                <i className="fa fa-archive"></i>
                    <a href="#">lojas</a>
                </div>

                <div className="sidebar__link">
                <i className="fa fa-bars"></i>
                    <a href="#">categorias</a>
                </div>

                <div className="sidebar__link">
                <i className="fa fa-cutlery"></i>
                    <a href="#">Pedidos</a>
                </div>

                <h2>Pessoas</h2>
                <div className="sidebar__link">
                <i className="fa fa-circle"></i>
                    <a href="#"> Usuario</a>
                </div>

                <div className="sidebar__link">
                <i className="fa fa-Money"></i>
                    <a href="#">Pagamentos e custos</a>
                </div>

                <div className="sidebar__link">
                <i className="fa fa-tasks"></i>
                    <a href="#">A plataforma</a>
                </div>

                <div className="sidebar__link">
                <i className="fa fa-file-text"></i>
                    <a href="#">politica e pivacidade</a>
                </div>

                <div className="sidebar__link">
                <i className="fa fa-power-off"></i>
                    <a href="#">log out</a>
                </div>


            </div>

        </div> 
    )
}

export default Sidebar;