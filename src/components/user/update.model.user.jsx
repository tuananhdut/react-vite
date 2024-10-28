import { useEffect, useState } from "react"
import { createUserApi, updateUserApi } from "../../services/api.service"
import { Input, notification, Modal } from 'antd';
import { TrophyOutlined } from "@ant-design/icons";


const UpdateUserModel = (props) => {
    const [fullName, setFullName] = useState("")
    const [id, setID] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const { setIsUpdateModelUser, isUpdateModelUser, setDataUpdateUser, dataUpdateUser } = props

    useEffect(() => {
        if (dataUpdateUser) {
            setID(dataUpdateUser._id)
            setFullName(dataUpdateUser.fullName)
            setPhoneNumber(dataUpdateUser.phone)
        }
    }, [dataUpdateUser])

    const resetAndCloseUpdateModalUser = () => {
        setID("")
        setFullName("")
        setPhoneNumber("")
        setIsUpdateModelUser(false)
        setDataUpdateUser(null)
    }


    return (
        <Modal
            title="Update User"
            open={isUpdateModelUser}
            onOk={() => setIsUpdateModelUser(false)}
            onCancel={() => resetAndCloseUpdateModalUser()}
            maskClosable={false}
            okText={"Save"}
        >
            <div className='user-form' style={{ margin: "30px 0" }}>
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div>
                        <span>ID</span>
                        <Input
                            onChange={(event) => setID(event.target.value)}
                            value={id}
                            disabled
                        />
                    </div>
                    <div>
                        <span>Full Name</span>
                        <Input
                            onChange={(event) => setFullName(event.target.value)}
                            value={fullName}
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
    )
}
export default UpdateUserModel