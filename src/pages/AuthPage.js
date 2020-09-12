import React from "react";
import { Tabs } from "antd";
import { LoginForm, SignUpForm } from "../components";

const { TabPane } = Tabs;

function AuthPage() {
	return (
		<Tabs defaultActiveKey="login">
			<TabPane tab="Login" key="login">
				<LoginForm />
			</TabPane>
			<TabPane tab="SignUp" key="signup">
				<SignUpForm />
			</TabPane>
		</Tabs>
	);
}

export default AuthPage;
