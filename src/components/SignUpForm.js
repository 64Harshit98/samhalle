import React from "react";
import { Form, Input, Button, Checkbox, InputNumber } from "antd";

const onFinish = (values) => {
	console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
	console.log("Failed:", errorInfo);
};

function SignUpForm() {
	return (
		<Form
			name="basic"
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				label="Full Name"
				name="fullname"
				rules={[{ required: true, message: "Please input your username!" }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Flat Number"
				name="flatnumber"
				rules={[{ required: true, message: "Please input your flat number!" }]}
			>
				<InputNumber min={1} max={50} defaultValue={12} />
			</Form.Item>
			<Form.Item
				label="Contact Number"
				name="contactnumber"
				rules={[{ required: true, message: "Please input your flat number!" }]}
			>
				<InputNumber />
			</Form.Item>
			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: "Please input your password!" }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item name="remember" valuePropName="checked">
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
}

export default SignUpForm;
