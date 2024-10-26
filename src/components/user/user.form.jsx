import { Input, Button, notification, Modal } from 'antd';
import { useState } from 'react';
import { createUserApi } from '../../services/api.service';

const UserFrom = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };


    // console.log({ fullName, email, password, phoneNumber })
    const handleSubmitBtn = async () => {
        const res = await createUserApi(fullName, email, password, phoneNumber)
        if (res.data) {
            notification.success({
                message: "create user",
                description: "tao user thanh cong"
            })
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
        setIsModalOpen(false)
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table User</h3>
                <Button type="primary"
                    onClick={() => { setIsModalOpen(true) }}
                >Create User</Button>
            </div>

            <Modal
                title="Create user"
                open={isModalOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => setIsModalOpen(false)}
                maskClosable={false}
                okText={"Create"}
            >
                <div className='user-form' style={{ margin: "30px 0" }}>
                    <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                        <div>
                            <span>Full Name</span>
                            <Input
                                onChange={(event) => setFullName(event.target.value)}
                                value={fullName}
                            />
                        </div>
                        <div>
                            <span>Email</span>
                            <Input
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                            />
                        </div>
                        <div>
                            <span>Password</span>
                            <Input.Password
                                onChange={(event) => setPassword(event.target.value)}
                                value={password}
                            />
                        </div>
                        <div>
                            <span>Phone number</span>
                            <Input
                                onChange={(event) => setPhoneNumber(event.target.value)}
                                value={phoneNumber}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </>







    )
}
export default UserFrom