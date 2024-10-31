import { Input, Button, Form } from "antd"

const RegisterPage = () => {
    const [form] = Form.useForm()
    const onFinish = (value) => {
        console.log(value)
    }
    return (
        <div style={{ margin: "50px" }}>
            <Form
                layout="vertical"
                name="basic"
                form={form}

                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[
                        {
                            required: false,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: false,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: false,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                        {
                            required: false,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* <button type="submit"  >Register</button> */}

                <Button onClick={() => form.submit()} type="primary">Register</Button>

            </Form >

        </div >
    )
}

export default RegisterPage