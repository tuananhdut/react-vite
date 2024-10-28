import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Flex, notification, Popconfirm, Space, Table, Tag } from 'antd';
import UpdateUserModel from './update.model.user';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserApi } from '../../services/api.service';

const UserTable = (props) => {
    const { dataUser, loadUser } = props;
    const [isUpdateModelUser, setIsUpdateModelUser] = useState(false);
    const [dataUpdateUser, setDataUpdateUser] = useState(null);
    const [isViewUserDetail, setIsViewUserDetail] = useState(false);
    const [dataUserDetail, setDataUserDetail] = useState(null);

    const handleDeleteUser = async (id) => {
        const res = await deleteUserApi(id)
        if (res.data) {
            notification.success({
                message: "Delete User",
                description: "Xóa Người Dùng Thành Công"
            })
            loadUser()
        } else {
            notification.error({
                message: "Delete User",
                description: JSON.stringify(res.message)
            })
        }
    }


    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a onClick={() => {
                        setIsViewUserDetail(true)
                        setDataUserDetail(record)
                    }} href="#">{record._id}</a>
                )
            }
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
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setIsUpdateModelUser(true)
                            setDataUpdateUser(record)
                        }}
                        style={{ cursor: "pointer", color: "orange" }}
                    />
                    <Popconfirm
                        title="Delete user"
                        description="Bạn muốn xóa người dùng này ?"
                        onConfirm={() => handleDeleteUser(record._id)}
                        okText="Yes"
                        cancelText="No"
                        placement="leftTop"
                    >
                        <DeleteOutlined style={{ cursor: 'pointer', color: "red" }} />
                    </Popconfirm>
                </div>
            ),
        },
    ];


    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={"_id"}
            />
            <UpdateUserModel
                isUpdateModelUser={isUpdateModelUser}
                setIsUpdateModelUser={setIsUpdateModelUser}
                dataUpdateUser={dataUpdateUser}
                setDataUpdateUser={setDataUpdateUser}
                loadUser={loadUser}
            />
            <ViewUserDetail
                isViewUserDetail={isViewUserDetail}
                setIsViewUserDetail={setIsViewUserDetail}
                dataUserDetail={dataUserDetail}
                setDataUserDetail={setDataUserDetail}
            />

        </>

    )
}
export default UserTable