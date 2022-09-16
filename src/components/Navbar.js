import React from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarContent,
    SidebarFooter
} from "react-pro-sidebar";
import { FaGem, FaList, FaGithub, FaHome } from "react-icons/fa";
import "../App.css";
import {Link} from "react-router-dom"

export default function Navbar() {
    const headerStyle = {
        padding: "24px",
        textTransform: "uppercase",
        fontWeight: "bold",
        letterSpacing: "1px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "noWrap"
    };

    return (
        <ProSidebar>
            <SidebarHeader style={headerStyle}>Физика</SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaHome />}><Link to="/">Домой</Link></MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        title="Электростатика"
                    >
                        <MenuItem>
                            <Link to="/task1_4">Задание №4</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/task1_5">Задание №5</Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter style={{ textAlign: "center" }}>
                <div className="sidebar-btn-wrapper">
                    <a
                        href="https://github.com/ilya-rudenko/physics-tasks"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span>Github</span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
}
