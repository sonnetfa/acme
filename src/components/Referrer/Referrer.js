import React from "react";
import './Referrer.css'
class Referrer extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <div className="referrer-tab p-3 dashboard-tabs">
                <h6 className="h-referrer"> Referrer</h6>
                <table className="table referrer-table p-3">
                    <thead className="referrer-head">
                        <tr>
                            <th scope="col">Locations</th>
                            <th scope="col">View</th>
                            <th scope="col">Sales</th>
                            <th scope="col">Conversion</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody className="referrer-body">
                        <tr>
                            <td>google.com</td>
                            <td>3746</td>
                            <td>752</td>
                            <td>49%</td>
                            <td>$19,291</td>
                        </tr>
                        <tr>
                            <td>facebook.com</td>
                            <td>8126</td>
                            <td>728</td>
                            <td>32%</td>
                            <td>$17,638</td>
                        </tr>
                        <tr>
                            <td>twitter.com</td>
                            <td>8836</td>
                            <td>694</td>
                            <td>28%</td>
                            <td>$16,218</td>
                        </tr>
                        <tr>
                            <td>Direct,email,IM</td>
                            <td>1173</td>
                            <td>645</td>
                            <td>24%</td>
                            <td>$14,421</td>
                        </tr>
                        <tr>
                            <td>linkedin.com</td>
                            <td>2739</td>
                            <td>539</td>
                            <td>20%</td>
                            <td>$12,370</td>
                        </tr>
                        <tr>
                            <td>instagram.com</td>
                            <td>2739</td>
                            <td>539</td>
                            <td>20%</td>
                            <td>$12,370</td>
                        </tr>
                        <tr><span className="show-more">Show More</span>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Referrer;