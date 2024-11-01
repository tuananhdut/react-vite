import { Input, Button, Form, notification, Col, Row } from "antd"
import { registerAPI } from "../services/api.service"
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate();


    const onFinish = async (values) => {
        console.log(values)
        //call API
        const resRegister = await registerAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone)

        if (resRegister.data) {
            notification.success({
                message: "Register User",
                description: "đăng ký user thành công"
            })
            navigate("/login")
        } else {
            notification.error({
                message: "Register User",
                description: JSON.stringify(resRegister.message)
            })
        }
    }
    return (
        <div style={{
            margin: "50px 20px"
        }}>
            <Form
                layout="vertical"
                name="basic"
                form={form}

                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Row justify={"center"}>
                    <Col xs={24} sm={20} md={18} lg={16} xl={10} >
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Full Name!',
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
                                    required: true,
                                    type: "email",
                                    message: 'Please input your Email!',
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
                                    required: true,
                                    message: 'Please input your password!',
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
                                    pattern: new RegExp(/\d+/g),
                                    message: "Wrong format!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        {/* <button type="submit"  >Register</button> */}

                        <Button onClick={() => form.submit()} type="primary">Register</Button>
                    </Col>
                </Row>


                {/* <Button onClick={() => {
                    form.setFieldsValue({
                        fullName: "toas",
                        email: "tuanhaoggg@gmail.com"
                    })
                    console.log(form.getFieldsValue())

                }} type="primary">Change</Button> */}

            </Form >

        </div >
    )
}

export default RegisterPage