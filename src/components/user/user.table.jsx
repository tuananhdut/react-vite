import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Flex, Space, Table, Tag } from 'antd';
import UpdateUserModel from './update.model.user';

const UserTable = (props) => {
    const { dataUser } = props;

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href="#">{record._id}</a>
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
                    <EditOutlined style={{ cursor: "pointer", color: "orange" }} />
                    <DeleteOutlined style={{ cursor: 'pointer', color: "red" }} />
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
            <UpdateUserModel />
        </>

    )
}
export default UserTable