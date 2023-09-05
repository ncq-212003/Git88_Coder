import React from "react";
import axios from "axios";

class SearchData extends React.Component {
    state = {
        Data: [],
        Arr: {},
        id: '',
        shouldUpdate: false
    }

    FindTable = async () => {
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
    SearchData = async () => {
        let id = this.state.id
        try {
            const Find = await axios.get(`http://erp1.a.tisbase.online/api/v1/Partner/${id}`);
            this.setState({
                Arr: Find.data
            })
        } catch (error) {
            console.error(error);
        }
    }
    componentDidMount() {
        this.FindTable();
        this.SearchData();
    }

    handChange = (tt) => {
        this.setState({
            id: tt.target.value,
            shouldUpdate: false
        })
    }
    handOnclick = () => {
        this.setState({
            shouldUpdate: !this.state.shouldUpdate,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.id === this.state.id && prevState.shouldUpdate !== this.state.shouldUpdate) {
            this.SearchData();
        }
    }

    render() {
        let { Data, Arr, id } = this.state;
        let isEmtyobj = Object.keys(Arr).length === 0;
        let fitterData = isEmtyobj ? Data : [Arr]

        return (
            <>
                <div className="Find-Search">
                    <h2>Search Data</h2>
                    <input type="text" placeholder="Enter CommonGroupID" value={id} onChange={(tt) => this.handChange(tt)} />
                    <input type="submit" value='Search' onClick={() => this.handOnclick()} />
                </div>

                <div className="table-data">
                    {Data && Data.length > 0 &&
                        <div className="child">
                            <h1> Table Data</h1>
                            <table id="customers">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>CommonGroupID</th>
                                    <th>HashCode</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                </tr>
                                {fitterData.map((items, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{items.name}</td>
                                            <td>{items.commonGroupId}</td>
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
            </>

        )
    }
}
export default SearchData;