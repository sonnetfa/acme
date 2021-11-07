import React from "react";
import './Notification.css'
import firstimg from './../../images/profile-pic-02.jpg'
import secondimg from './../../images/profile-pic-06.jpg'
import thirdimg from './../../images/profile-pic-05.jpg'
class Notification extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <div className="notifications" >
                <div className="p-2 d-flex">
                    <div className="other-user-image py-2">
                        <img className="other-user-profile-pic" alt="Avatar" src={firstimg}></img>
                    </div>
                    <div>
                        <span className="d-flex px-2 other-user-name">Bavid Kames</span>
                        <span className="d-flex px-2 other-user-desc">Assigned you on call with sara</span>
                    </div>
                    <span className="other-user-time">2 min ago</span>

                </div>
                <div className="p-2 d-flex">
                    <div className="other-user-image py-2">
                        <img className="other-user-profile-pic" alt="Avatar" src={secondimg}></img>
                    </div>
                    <div>
                        <span className="d-flex px-2 other-user-name">Alexa Marry</span>
                        <span className="d-flex px-2 other-user-desc">Marked the task new UI as done</span>
                    </div>
                    <span className="other-user-time">5 min ago</span>

                </div>
                <div className="p-2 d-flex">
                    <div className="other-user-image py-2">
                        <img className="other-user-profile-pic" alt="Avatar" src={thirdimg}></img>
                    </div>
                    <div>
                        <span className="d-flex px-2 other-user-name">Eva Maria</span>
                        <span className="d-flex px-2 other-user-desc">Added a new comment on sales task</span>
                    </div>
                    <span className="other-user-time">10 min ago</span>

                </div>
                <div className="p-2 show-more-tab">
                    <div>
                        <span className="d-flex justify-content-center py-2">Show More</span>
                    </div>

                </div>
            </div>
        )
    }
}
export default Notification;