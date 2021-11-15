import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { Layout, Typography, Input, Button, Dropdown, Menu } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

export const Header: React.FC = () => {
	return (
		<div className={styles["app-header"]}>
			<div className={styles["top-header"]}>
				<div className={styles.inner}>
					<Typography.Text>让旅游更幸福</Typography.Text>
					<Dropdown.Button
						icon={<GlobalOutlined />}
						overlay={
							<Menu>
								<Menu.Item>中文</Menu.Item>
								<Menu.Item>英文</Menu.Item>
							</Menu>
						}
						style={{ marginLeft: 15 }}
					>
						语言
					</Dropdown.Button>
					<Button.Group className={styles["button-group"]}>
						<Button>注册</Button>
						<Button>登录</Button>
					</Button.Group>
				</div>
			</div>
			<Layout.Header className={styles["main-header"]}>
				<img src={logo} alt="logo" className={styles["App-logo"]} />
				<Typography.Title level={3} className={styles.title}>
					React 旅游网
				</Typography.Title>
				<Input.Search
					placeholder={`请输入旅游目的地、主题、关键字`}
					className={styles["search-input"]}
				></Input.Search>
			</Layout.Header>
			<Menu mode="horizontal" className={styles["main-menu"]}>
				<Menu.Item key={1}>旅游首页</Menu.Item>
				<Menu.Item key={2}>周末游</Menu.Item>
				<Menu.Item key={3}>跟团游</Menu.Item>
			</Menu>
		</div>
	);
};
