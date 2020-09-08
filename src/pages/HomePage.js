import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { UserAddOutlined, DashboardTwoTone } from "@ant-design/icons";

function HomePage() {
	return (
		<div>
			<Link to="/authentication">
				<Button type="dashed" icon={<UserAddOutlined />}>
					Login/SignUp
				</Button>
			</Link>
			<Link to="/dashboard">
				<Button type="dashed" icon={<DashboardTwoTone />}>
					Dashboard
				</Button>
			</Link>
		</div>
	);
}

export default HomePage;
