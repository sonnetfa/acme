import React from "react";
import './Statistics.css'
import { Line } from 'react-chartjs-2';
class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Product Sold',
                    data: [15, 10, 15, 18, 15, 24],
                    fill: true,
                    borderColor: 'rgb(181, 179, 251)',
                    backgroundColor: 'rgb(181, 179, 251,0.3)',
                    tension: 0.5
                },
                {
                    label: 'Total Views',
                    data: [19, 7.5, 16, 12, 16, 9],
                    fill: true,
                    borderColor: 'rgb(128, 226, 255)',
                    backgroundColor: 'rgb(128, 226, 255,0.3)',
                    tension: 0.5
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            min: 5,
                            max: 25,
                            stepSize: 5,
                            // Include a dollar sign in the ticks
                            callback: function (value, index, values) {
                                return '$' + value + 'k';
                            }
                        }
                    }
                }
            }
        };
    }
    render() {
        return (
            <div className="mx-3 statistics p-3 dashboard-tabs">
                <h6 className="statistics-head">Statistics</h6>
                <Line data={this.state.data} className="statistics-chart" options={this.state.options} />
                
                <div className="w-100 d-flex justify-content-center py-3">
                    <span className="products-legend"></span>
                    <span className="y-legend px-2 ">Products Sold</span>
                    <span className="total-legend"></span>
                    <span className="y-legend px-2 ">Total Views</span>
                </div>
            </div>
        )
    }
}
export default Statistics;