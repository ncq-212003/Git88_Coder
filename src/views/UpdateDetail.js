import React from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";

class UpdateDetail extends React.Component {
    state ={
        user : {}
    }
    render() {
        let { user } = this.state;
        let isEmtyobj = Object.keys(user).length === 0;
        return (
            <div>jjjj</div>
        )
    }
}