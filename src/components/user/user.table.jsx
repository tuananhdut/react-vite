import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from "../../services/api.service"




const UserTable = () => {
    const [dataUser, setDataUser] = useState([])
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
        // setDataUser(res.data)
        console.log(res.data)
    }

    loadUser()

    return (
        <Table columns={columns} dataSource={dataUser} />
    )
}
export default UserTable