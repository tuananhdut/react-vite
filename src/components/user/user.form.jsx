import { Input, Button } from 'antd';
import { useState } from 'react';


const UserFrom = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    // console.log({ fullName, email, password, phoneNumber })
    const handleOnClick = () => {
        console.log({ fullName, email, password, phoneNumber })
    }

    return (
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
                <div>
                    <Button type="primary"
                        onClick={() => handleOnClick()}
                    >Submit</Button>
                </div>
            </div>
        </div>
    )
}
export default UserFrom