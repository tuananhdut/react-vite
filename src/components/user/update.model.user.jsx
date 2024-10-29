import { useEffect, useState } from "react"
import { updateUserApi } from "../../services/api.service"
import { Input, notification, Modal } from 'antd';


const UpdateUserModel = (props) => {
    const [fullName, setFullName] = useState("")
    const [id, setID] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const { setIsUpdateModelUser, isUpdateModelUser, setDataUpdateUser, dataUpdateUser, loadUser } = props

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

    const handleSaveBtn = async () => {
        const res = await updateUserApi(id, fullName, phoneNumber)
        if (res.data) {
            notification.success({
                message: "Update User Success",
                description: "Cập nhật thành công"
            })
            resetAndCloseUpdateModalUser()
            loadUser()
        } else {
            notification.error({
                message: "Update User error",
                description: JSON.stringify(res.message)
            }
            )
        }

    }


    return (
        <Modal
            title="Update User"
            open={isUpdateModelUser}
            onOk={() => handleSaveBtn()}
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