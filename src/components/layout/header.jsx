import { Link } from "react-router-dom"
import React, { useContext, useState } from 'react';
import { AuditOutlined, BoldOutlined, HomeOutlined, LoginOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { AuthContext } from "../context/auth.context";

const Header = () => {
    const [current, setCurrent] = useState('');
    const data = useContext(AuthContext);
    console.log(data)

    const onClick = (e) => {
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: 'home',
            icon: <HomeOutlined />
        },
        {
            label: <Link to="/users">User</Link>,
            key: 'user',
            icon: <UserOutlined />
        },
        {
            label: <Link to="/books">Book</Link>,
            key: 'books',
            icon: <AuditOutlined />
        },
        ...(!data.user.id ? [{
            label: <Link to="/login">Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />
        }] : []),
        ...(data.user.id ? [{
            label: `Welcome ${data.user.fullName}`,
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    label: 'Đăng xuất',
                    key: "logout"
                },

            ],
        }] : []),

    ];
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Header