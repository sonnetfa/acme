import React from "react";
import './SalesDistribution.css'
import { Doughnut } from 'react-chartjs-2';
class SalesDistribution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                datasets: [{
                    data: [4260, 3970, 4260, 3970],
                    backgroundColor: [
                        'rgb(128, 226, 255)',
                        'rgb(244, 159, 168)',
                        'rgb(255, 223, 148)',
                        'rgb(181, 179, 251)'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                        position: 'bottom'
                    }
                }
            }

        };
    }
    render() {
        return (
            <div className="sales-distribution p-3 dashboard-tabs">
                <h6 className="sales-distribution-head">Sales Distribution</h6>
                <div className="w-100 d-flex justify-content-center">
                    <div className="w-50 p-3">
                    <Doughnut data={this.state.data} options={this.state.options} />
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <span className="france-legend"></span>
                    <span className="country-legend px-2 ">France </span>
                    <span className="sales-legend">4260 sales</span>
                    <span className="italy-legend"></span>
                    <span className="country-legend px-2 ">Italy </span>
                    <span className="sales-legend">3970 sales</span>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <span className="japan-legend"></span>
                    <span className="country-legend px-2 ">Japan  </span>
                    <span className="sales-legend">4260 sales</span>
                    <span className="canada-legend"></span>
                    <span className="country-legend px-2 ">Canada  </span>
                    <span className="sales-legend">3970 sales</span>
                </div>
            </div>
        )
    }
}
export default SalesDistribution;