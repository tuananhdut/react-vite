import { Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const { isViewUserDetail, setIsViewUserDetail, dataUserDetail, setDataUserDetail } = props

    return (
        <Drawer title="Chi Tiết User" onClose={() => {
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
                </> : <>
                    <p>Không có dữ liệu</p>
                </>}
        </Drawer>
    )
}

export default ViewUserDetail