import React from "react";
import './UserInfo.css'
import profileImage from './../../images/profile-pic-01.jpg'
import firstimg from './../../images/profile-pic-03.jpg'
import secondimg from './../../images/profile-pic-02.jpg'
import thirdimg from './../../images/profile-pic-04.jpg'
class UserInfo extends React.Component {
    render() {
        return (
            <div className=" dashboard-tabs user-info-tab" >
                <div className="d-flex justify-content-center p-3">
                    <div>
                        <div className="d-flex justify-content-center profile-image-holder">
                            <img className="profile-image" alt="Avatar" src={profileImage}></img>
                            <div className="edit-profile-pic d-flex justify-content-center">
                                <span className="fa edit-icon" >
                               </span></div>
                        </div>
                        <span className="d-flex justify-content-center user-name">Nick Herasimenka</span>
                        <span className="d-flex justify-content-center user-country">United States</span>
                        <div className="d-flex justify-content-center social-media-icons">
                            <span className="fa twitter-icon"></span>
                            <span className="fa facebook-icon"></span>
                            <span className="fa linkedin-icon"></span>
                            <span className="fa whatsapp-icon"></span>
                        </div>
                    </div>
                </div>
                <div className="other-users w-100">
                    <div className="w-100 p-3">
                        <span className="other-user-heading">Our Users</span>
                        <span className="float-right fa icon-ellipsis py-2"></span>
                    </div>
                    <div className="p-3 d-flex">
                        <div className="other-user-image">
                            <img className="other-user-profile-pic" alt="Avatar" src={firstimg}></img>
                        </div>
                        <div>
                            <span className="d-flex px-3 other-user-name">Drew James</span>
                            <span className="d-flex px-3 other-user-country">United States</span>
                        </div>
                        <span className="other-user-phone">Mobile : 8715674877</span>

                    </div>
                    <div className="p-3 d-flex">
                        <div className="other-user-image">
                            <img className="other-user-profile-pic" alt="Avatar" src={secondimg}></img>
                        </div>
                        <div>
                            <span className="d-flex px-3 other-user-name">Bavid Kames</span>
                            <span className="d-flex px-3 other-user-country">United States</span>
                        </div>
                        <span className="other-user-phone">Mobile : 8715674877</span>

                    </div>
                    <div className="p-3 d-flex">
                        <div className="other-user-image">
                            <img className="other-user-profile-pic" alt="Avatar" src={thirdimg}></img>
                        </div>
                        <div>
                            <span className="d-flex px-3 other-user-name">Lavid Emes</span>
                            <span className="d-flex px-3 other-user-country">United States</span>
                        </div>
                        <span className="other-user-phone">Mobile : 8715674877</span>

                    </div>
                </div>
            </div>
        )
    }
}
export default UserInfo;