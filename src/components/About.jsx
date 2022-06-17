import { EnvironmentOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Space, Typography } from "antd";

export function About() {
    return (
        <Row  className="container">
            <Col xs={24} md={6} lg={8}>
                <Row justify="space-between" align="middle">
                    <Col xs={8} md={24}>
                        <h1 className="heading1">Hi there, <br /> I am Nartey</h1>
                    </Col>
                   
                    <Col xs={8} md={24} className="p-h-2">
                        <Space direction="vertical" align="center">
                            <EnvironmentOutlined style={{fontSize: "1.8em"}} />
                            <h1 className="heading3 text-center">
                                Kumasi, Ghana <br />
                                <span className="mutted">West Africa</span>
                            </h1>
                        </Space>
                    </Col>
                </Row>
            </Col>
            <Col xs={24} md={8} lg={8}>
                <Row justify="center" align="middle" style={{height: "100%"}}>
                    <Avatar
                        size={{ xs: 100, sm: 100, md: 100, lg: 100, xl: 100, xxl: 100 }}
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                </Row>
            </Col>
            <Col xs={24} md={10} lg={8}>
                <Row style={{height: "100%"}} >
                    <Col span={24} >
                        <p className="paragraph">
                            I am a self-motivated person who is willing to go above and beyond,
                            and learn valuable skills on any project and seek to improve my understanding
                            and adoption of current trends and emerging technologies.
                        </p>
                    </Col>
                    <Col span={24}>
                        <Space align="center">
                            <Typography.Title style={{padding: 0, margin: 0, fontWeight: 700, fontSize: "3.4rem"}}>3</Typography.Title>
                            <Space direction="vertical" size={0}>
                                <span className="mutted">YEARS </span>
                                <span className="mutted">EXPERIENCE</span>
                            </Space>
                        </Space>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}