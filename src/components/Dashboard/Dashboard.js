import React from "react";
import './Dashboard.css'
import Statistics from './../Statistics'
import SalesDistribution from './../SalesDistribution'
import UserInfo from './../UserInfo'
import ProductVideo from './../ProductVideo'
import Referrer from './../Referrer'
class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <div className="p-3 d-flex">
                    <div className="overview-heading">Overview</div>
                    <button className="btn add-fund-button">Add Funds
                   <span className="add-fund-badge badge">+</span></button>
                </div>
                <div className="dashboard-main">                    
                <div className="dashboard-user-info">
                        <UserInfo ></UserInfo>
                        <div className="d-view">
                        <ProductVideo></ProductVideo>
                        </div>
                    </div>
                    <div className="dashboard-statistics" >
                        <div className="dashboard-graphs">
                            <Statistics ></Statistics>
                            <SalesDistribution ></SalesDistribution>
                        </div>
                        <Referrer></Referrer>
                        <div className="m-view">                            
                        <ProductVideo></ProductVideo>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;