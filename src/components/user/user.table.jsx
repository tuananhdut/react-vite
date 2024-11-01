import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Table } from 'antd';
import UpdateUserModel from './update.model.user';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserApi } from '../../services/api.service';

const UserTable = (props) => {
    const { dataUser, loadUser, current, pageSize, total, setCurrent, setPageSize } = props;
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
            title: 'STT',
            dataIndex: '',
            render: (id, record, index) => { return (current - 1) * pageSize + ++index; }
        },
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

    const onChange = (pagination, filters, sorter, extra) => {
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current)
            }
        }
        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize)
            }
        }
        // console.log({ pagination, filters, sorter, extra })
    }

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={"_id"}
                pagination={{
                    current: current,
                    pageSize: pageSize,
                    showSizeChanger: true,
                    total: total,
                }}
                onChange={onChange}
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
                loadUser={loadUser}
            />

        </>

    )
}
export default UserTable