import { Input, Button } from 'antd';

const UserFrom = () => {
    return (
        <div className='user-form' style={{ margin: "30px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Full Name</span>
                    <Input />
                </div>
                <div>
                    <span>Email</span>
                    <Input />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input />
                </div>
                <div>
                    <Button type="primary">Submit</Button>
                </div>
            </div>
        </div>
    )
}
export default UserFrom