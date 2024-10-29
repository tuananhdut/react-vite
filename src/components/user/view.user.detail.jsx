import { Button, Drawer, notification } from 'antd';
import { useState } from 'react';
import { handleUploadFile, updateUserApi, updateUserAvatarApi } from '../../services/api.service';

const ViewUserDetail = (props) => {
    const { isViewUserDetail, setIsViewUserDetail, dataUserDetail, setDataUserDetail, loadUser } = props
    const [selectFile, setSelectFile] = useState(null)
    const [preview, setPreview] = useState(null);


    const handleOnchageFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectFile(null)
            setPreview(null)
            return;
        }
        const file = event.target.files[0]
        if (file) {
            setSelectFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleUserUpdateAvatar = async () => {
        //call API Upload file
        const resUpload = await handleUploadFile(selectFile, "avatar")
        if (resUpload) {
            const newAvatar = resUpload.data.fileUploaded
            const resUpdateAvatar = await updateUserAvatarApi(dataUserDetail._id, dataUserDetail.fullName, dataUserDetail.phone, newAvatar)

            if (resUpdateAvatar.data) {
                setIsViewUserDetail(false)
                setSelectFile(null)
                setPreview(null)
                await loadUser()

                notification.success({
                    message: "Update Avatar",
                    description: "Thêm ảnh thành công"
                })
            } else {
                notification.error({
                    message: "Update Avatar",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }
        } else {
            notification.error({
                message: "Update Avatar",
                description: JSON.stringify(resUpload.message)
            })
        }
    }
    return (
        <Drawer
            width="40vw"
            title="Chi Tiết User" onClose={() => {
                setIsViewUserDetail(false)
                setDataUserDetail(null)
            }} open={isViewUserDetail}
        >
            {dataUserDetail ?
                <>
                    <p>ID : {dataUserDetail._id}</p>
                    <br />
                    <p>Full Name : {dataUserDetail.fullName}</p>
                    <br />
                    <p>Email : {dataUserDetail.email}</p>
                    <br />
                    <p>Phone Number : {dataUserDetail.phone}</p>
                    <br />
                    <p>Avatar :</p>
                    <div>
                        <img
                            style={{
                                width: "250px",
                                margin: "8px 0",
                                border: "1px solid #ccc"

                            }} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataUserDetail.avatar}`} />
                    </div>
                    <div>
                        <label htmlFor="btmUpload"
                            style={{
                                display: "block",
                                width: "fit-content",
                                borderRadius: "5px",
                                background: "orange",
                                padding: "5px 10px"
                            }}>Upload Avatar</label>
                        <input type="file" hidden id='btmUpload' onChange={(event) => handleOnchageFile(event)} />
                    </div>
                    {preview && <>
                        <div>
                            <img style={{
                                width: "250px",
                                margin: "8px 0",
                                border: "1px solid #ccc"
                            }} src={preview} />
                        </div>
                        <Button type="primary" onClick={() => handleUserUpdateAvatar()}>Save</Button>
                    </>}


                </> : <>
                    <p>Không có dữ liệu</p>
                </>}
        </Drawer>
    )
}

export default ViewUserDetail