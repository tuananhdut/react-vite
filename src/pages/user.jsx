import UserFrom from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from "../services/api.service"



const UserPage = () => {
    const [dataUser, setDataUser] = useState([])
    const [pageSize, setPageSize] = useState(5)
    const [current, setCurrent] = useState(1)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        loadUser()
    }, [current, pageSize]);

    const loadUser = async () => {
        const res = await fetchAllUserAPI(current, pageSize)
        if (res.data) {
            setDataUser(res.data.result)
            setCurrent(res.data.meta.current)
            setPageSize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)
        }
    }

    return (
        <div style={{ padding: "20px" }}>
            <UserFrom loadUser={loadUser} />
            <UserTable
                dataUser={dataUser}
                loadUser={loadUser}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />
        </div>
    )
}

export default UserPage