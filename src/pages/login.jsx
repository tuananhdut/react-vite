import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Divider, Form, Input, message, notification, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { json, Link, Navigate, useNavigate } from 'react-router-dom';
import { loginAPI } from '../services/api.service';
import { useContext, useState } from 'react';
import { AuthContext } from '../components/context/auth.context';

const LoginPage = () => {
    const [form] = useForm()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const { setUser } = useContext(AuthContext)

    const onFinish = async (values) => {
        setLoading(true)
        const res = await loginAPI(values.email, values.password)
        if (res.data) {
            message.success("Đăng nhập thành công")
            // lưu token vào localStorage
            localStorage.setItem("access_token", res.data.access_token)
            setUser(res.data.user)
            navigate("/")
        } else {
            notification.error({
                message: "Login user",
                description: JSON.stringify(res.message)
            })
        }
        setLoading(false)
    }

    return (
        <Row justify={'center'} style={{ margin: "20px" }}>
            <Col xs={24} sm={20} md={20} lg={16} xl={10}>
                <fieldset style={{ border: "2px solid #ccc", padding: "10px", borderRadius: "10px" }} >
                    <legend>Đăng nhập</legend>
                    <Form
                        layout='vertical'
                        name="basic"
                        form={form}

                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Email không được để trống!',
                                },
                                {
                                    type: "email",
                                    message: 'Email không đúng định dạng!',
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
                                    message: 'Password không được để trống!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" onClick={() => { form.submit() }}
                                loading={loading}>
                                Login
                            </Button>
                            <Link style={{ float: "right" }} to={"/"}>Go to homepage <ArrowRightOutlined /></Link>
                        </Form.Item>
                        <Divider />
                        <p style={{ textAlign: "center", margin: "10px 0" }}>Chưa có tài khoản? <Link to={"/register"}>Đăng ký tại đây</Link></p>
                    </Form>
                </fieldset>
            </Col>
        </Row >

    )

}

export default LoginPage