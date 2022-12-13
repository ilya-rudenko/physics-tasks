import React, {useEffect} from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarContent,
    SidebarFooter
} from "react-pro-sidebar";
import { FaGithub, FaHome } from "react-icons/fa";
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

    useEffect(() => {
        document.title = 'Физика';
    });

    return (
        <ProSidebar>
            <SidebarHeader style={headerStyle}>Физика</SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaHome />}><Link to="/">Домой</Link></MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        title="1. Электростатика"
                    >
                        <MenuItem>
                            <Link to="/task1_4">Задание №4</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/task1_8">Задание №8</Link>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu
                        title="2. Расчет напряженности"
                    >
                        <MenuItem>
                            <Link to="/task2_1">Задание №1</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/task2_4">Задание №4</Link>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu
                        title="3. Потенциал"
                    >
                        <MenuItem>
                            <Link to="/task3_3">Задание №3</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/task3_5">Задание №5</Link>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu
                        title='4. Работа поля'
                    >
                        <MenuItem>
                            <Link to="/task4_1">Задание №1</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/task4_8">Задание №8</Link>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu
                        title='5. Проводники'
                    >
                        <MenuItem>
                            <Link to='/task5_5'>Задание №5</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/task5_8'>Задание №8</Link>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu
                        title='6. Диэлектрики'
                    >
                        <MenuItem>
                            <Link to='/task6_3'>Задание №3</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/task6_7'>Задание №7</Link>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu
                        title='7. Постоянный ток'
                    >
                        <MenuItem>
                            <Link to='/task7_2'>Задание №2</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/task7_3'>Задание №3</Link>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu
                        title='8. Магнитное поле'
                    >
                        <MenuItem>
                            <Link to='/task8_3'>Задание №3</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/task8_5'>Задание №5</Link>
                        </MenuItem>
                    </SubMenu>
                    <SubMenu
                        title='9. Сила Ампера'
                    >
                        <MenuItem>
                            <Link to='/task9_4'>Задание №4</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/task9_5'>Задание №5</Link>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu
                        title='10. Электромагнетическая индукция'
                    >
                        <MenuItem>
                            <Link to='/task10_2'>Задание №2</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/task10_3'>Задание №3</Link>
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
