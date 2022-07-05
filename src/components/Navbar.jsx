import { MenuOutlined, PhoneOutlined } from "@ant-design/icons";
import { Menu, Row, Col, Button, Space, Dropdown } from "antd";

export function Navbar() {
    return (
        <Row>
            <Col xs={0} md={24}>
                <Row justify="space-between" align="middle">
                    <h2>NarteySarso</h2>
                    <Space size={"large"}>
                        <Button ghost type="text" shape="round" href="#about">Me</Button>
                        <Button ghost type="text" shape="round" href="#project">Portfolio</Button>
                        <Button ghost type="text" shape="round" href="#experience">Experience</Button>
                    </Space>
                    <Space align="middle">
                        <h3> (+233) 057 257 5885</h3>
                        <Button shape="circle" icon={<PhoneOutlined rotate={90} />} />
                    </Space>
                </Row>
            </Col>
            <Col xs={24} md={0}>
                <Row justify="space-between" align="middle">
                    <h2>NarteySarso</h2>
                    <Dropdown overlay={
                        <Menu>
                            <Menu.Item>
                                <a href="#about">Me</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="#project">Portfolio</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="#experience"> Experience </a>
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item>
                                <a href="tel:(+233) 055 437 0252" >
                                <Space align="middle">
                                    <h3> (+233) 055 437 0252</h3>
                                    <Button shape="circle" icon={<PhoneOutlined rotate={90} />} />
                                </Space>
                                </a>
                            </Menu.Item>
                        </Menu>
                    }
                    >
                        <Button ghost type="text" icon={<MenuOutlined />} shape="circle" />
                    </Dropdown>

                </Row>
            </Col>

        </Row>
    )
}