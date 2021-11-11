import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import './Sidebar.css'
class Sidebar extends React.Component {
    render() {
        return (
            <div className="acme-sidebar" >
                <h4 className="p-3 acme-sidebar-heading">ACME</h4>
                <div className="sidebar-links">
                    <Router>
                        <NavLink className="sidebar-link-item p-3 w-100 d-flex" activeClassName="active-links" to="/home" >
                            <span className="fa icon-home px-2 py-1"></span>Home</NavLink>
                        <NavLink className="sidebar-link-item p-3 w-100 d-flex" activeClassName="active-links" to="/" exact>
                            <span className="fa icon-dashboard px-2 py-1"></span>Dashboard</NavLink>
                        <NavLink className="sidebar-link-item p-3 w-100 d-flex" activeClassName="active-links" to="/inbox" exact>
                            <span className="fa icon-inbox px-2 py-1"></span>Inbox
                            <span className="badge badge-danger badge-pill float-right">New</span>
                            <span className="margin-filler"></span></NavLink>
                        <NavLink className="sidebar-link-item p-3 w-100 d-flex" activeClassName="active-links" to="/products" exact>
                            <span className="fa icon-product px-2 py-1"></span>Products</NavLink>
                        <NavLink className="sidebar-link-item p-3 w-100 d-flex" activeClassName="active-links" to="/admin" exact>
                            <span className="fa icon-admin px-2 py-1"></span>Admin</NavLink>
                    </Router>

                </div>
            </div>
        )
    }
}
export default Sidebar;