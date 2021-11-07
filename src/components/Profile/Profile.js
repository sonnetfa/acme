import React from "react";
import './Profile.css'
class Profile extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <div className="profile-action" >
                <div className="px-3 py-2 d-flex">
                    <div className="d-flex">
                        <span className="d-flex px-2 py-1 fa profile-icon"></span>
                        <span>My Profile</span>
                    </div>

                </div>
                <div className="px-3 py-2 d-flex">
                <div className="d-flex">
                        <span className="d-flex px-2 py-1 fa billing-icon"></span>
                        <span>Billing</span>
                    </div>

                </div>
                <div className="px-3 py-2 d-flex">
                <div className="d-flex">
                        <span className="d-flex px-2 py-1 fa logout-icon"></span>
                        <span>Logout</span>
                    </div>

                </div>
            </div>
        )
    }
}
export default Profile;