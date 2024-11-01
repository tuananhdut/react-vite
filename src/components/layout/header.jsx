import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { BoldOutlined, HomeOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const Header = () => {
    const [current, setCurrent] = useState('');
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
            icon: <BoldOutlined />
        },
        {
            label: 'Setting',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={"/login"}>Login</Link>,
                    key: "login"
                },
                {
                    label: <Link to={"/register"}>Register</Link>,
                    key: "register"
                }
            ],
        },
    ];
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Header