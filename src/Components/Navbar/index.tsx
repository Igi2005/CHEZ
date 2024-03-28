import React from 'react';
import {routes} from "../../Routing/index.tsx"
import {Link} from "react-router-dom"
import "./Navbar_style.scss"
import {TiThMenuOutline} from "react-icons/ti";
import { IoCloseCircleOutline } from "react-icons/io5";
import {useCollapse} from "react-collapsed";
export function Navbar(){

    const config = {
        duration: 2000
    };

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

    return (
    <div className="collapsible">
        <div className="nav" {...getToggleProps()}>
            {isExpanded ?  <IoCloseCircleOutline className="icons_nav"/>: <TiThMenuOutline className="icons_nav"/> }
        </div>
        <div {...getCollapseProps()}>
            <div className="content_nav">
                {routes.map((route) => (
                        <li key={route.path} className="items_nav">
                            <Link to={route.path} className="items_nav">{route.title}{route.icon}</Link>
                        </li>
                    )
                )}
            </div>
        </div>
    </div>
    )
}