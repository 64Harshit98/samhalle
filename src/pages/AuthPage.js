import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

function AuthPage() {
	return (
		<Tabs defaultActiveKey="1" onChange={callback}>
			<TabPane tab="Login" key="login">
				Login
			</TabPane>
			<TabPane tab="SignUp" key="signup">
				SignUp
			</TabPane>
		</Tabs>
	);
}

export default AuthPage;
