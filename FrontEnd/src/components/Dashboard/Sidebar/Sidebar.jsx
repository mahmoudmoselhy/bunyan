import styles from "./Sidebar.module.css"

import { NavLink } from "react-router-dom";

function Sidebar({ drafts = {} }){


    const links =[
        {icon : "fa-chart-column", title : "Status" , path:"/"},
        {icon : "fa-users", title : "Users Mangement", path:"/user", draftName: "users"},
        {icon : "fa-building", title : "Project Mangement" , path:"/projects", draftName: "projects"},
        {icon : "fa-code", title : "Developers Mangement", path:"/developer", draftName: "developers"},
        {icon : "fa-globe", title : "CMs"},
        {icon : "fa-message", title : "Live Chat"},
    ]


    return(
        <>

        <aside className={`${styles.sidebar} min-vh-100  py-4`}>

            <div className="fw-semibold px-3 mb-4 fs-4"> Dashboard</div>
                <nav>
                    {links.map((item , index)=>(
                         <NavLink to={item.path || "#"} className={`${styles.navItem} d-flex align-items-center px-3 gap-2 py-4`} key={index}>
                        <i className={`fa-solid ${item.icon} fs-3`} ></i>
                        <span className={styles.title}> {item.title}</span>
                        {drafts[item.draftName] && (
                            <span className="badge bg-warning text-dark ms-auto">Draft</span>
                        )}
                    </NavLink>
                    ))}
                   
                </nav>

        

        </aside>

        
        </>
    )
}


export default Sidebar ;
