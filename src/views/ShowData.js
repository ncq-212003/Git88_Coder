import axios from "axios";
import React from "react";
import '../styles/showData.scss'

class ShowData extends React.Component {
    state = {
        Data: [],

    }
    async componentDidMount() {
        try {
            const response = await axios.get('http://erp1.a.tisbase.online/api/v1/Partner/all?sortByExpression=desc');
            this.setState({
                Data: response.data
            })
            console.log('check res', this.state.Data)

        } catch (error) {
            console.error(error);
        }
    }

    render() {
        let { Data, arr } = this.state;
        return (
            <div>

                <div className="Controller-Name">
                    <h2>Du lieu Data</h2>
                    {Data && Data.length > 0 &&
                        <div className="child">
                            <h1>A Fancy Table</h1>
                            <table id="customers">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>HashCode</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                </tr>
                                {Data.map((items, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{items.name}</td>
                                            <td>{items.hashCode}</td>
                                            <td>{items.phone}</td>
                                            <td>{items.address}</td>
                                            <td>{items.email}</td>
                                        </tr>
                                    )

                                })}

                            </table>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
export default ShowData;