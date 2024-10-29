import { Button, Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const { isViewUserDetail, setIsViewUserDetail, dataUserDetail, setDataUserDetail } = props

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
                        <img style={{ width: "300px", padding: "8px 0" }} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataUserDetail.avatar}`} />
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
                        <input type="file" hidden id='btmUpload' />
                    </div>
                </> : <>
                    <p>Không có dữ liệu</p>
                </>}
        </Drawer>
    )
}

export default ViewUserDetail