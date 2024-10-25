import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from "../../services/api.service"




const UserTable = () => {
    const [dataUser, setDataUser] = useState([])

    //empty array => useEffect chay 1 lan
    useEffect(() => {
        loadUser()
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
        },
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUser(res.data)
    }

    return (
        <Table
            columns={columns}
            dataSource={dataUser}
            rowKey={"_id"}
        />
    )
}
export default UserTable