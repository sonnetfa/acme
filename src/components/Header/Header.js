import React from "react";
import './Header.css'
import profileImage from './../../images/profile-pic-01.jpg'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Notification from "../Notification";
import Popover from 'react-bootstrap/Popover'
import Profile from "../Profile";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOverlayOpen: false
        };
        this.toggleOverlay = this.toggleOverlay.bind(this);
    }
    toggleOverlay() {
        this.setState({ isOverlayOpen: !this.state.isOverlayOpen });
    }
    render() {
        return (
            <div className={this.props.isSidebarOpen ? "header-acme negative-margin" : "header-acme"}>
                <span onClick={this.props.toggleSidebar} className="fa hamburger-icon my-2"></span>
                <div className="w-100">
                    <span className="icon-search"></span>
                    <input className="icme-search mx-2 w-100" type='search' placeholder="Search transactions, invoices or help">
                    </input>
                </div>
                <div>
                    <OverlayTrigger 
                        placement="bottom"
                        trigger="click"
                        overlay={
                            <Popover>
                                <Notification></Notification>
                            </Popover>}
                    >

                        <span className="fa notification-icon m-1"></span>
                    </OverlayTrigger>
                </div>
                <div className="d-flex user-name">
                    John&nbsp;Doe
                    <div>                        
                    <OverlayTrigger 
                        placement="bottom"
                        trigger="click"
                        overlay={
                            <Popover>
                                <Profile></Profile>
                            </Popover>}
                    >
                    <span onClick={this.toggleOverlay} className={this.state.isOverlayOpen?"fa icon-up m-1":"fa icon-down m-1"}></span>
                    </OverlayTrigger>
                    </div>
                </div>
                <div>
                    <img className="user-thumbnail mx-2" alt="Avatar" src={profileImage}></img>
                </div>
            </div>
        )
    }
}
export default Header;