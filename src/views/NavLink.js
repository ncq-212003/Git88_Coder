import React from "react";
import '../styles/NavLink.scss';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MyPartner from "../MyPartner";
import {
    Link,
    NavLink
} from "react-router-dom";

export const Navlink = () => {
    return (
        <div class="topnav">
            <a class="active" href="/insert">Insert</a>
            <a href="/getall">GetAll</a>
            <a href="/getcommon">GelCommonGroupID</a>
            <a href="/update">Update</a>
        </div>
    )
}
