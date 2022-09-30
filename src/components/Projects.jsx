import { DesktopOutlined, GithubFilled } from "@ant-design/icons";
import { Card, Col, Divider, Row, Space, Tabs, Tag, Typography } from "antd";
import { categories, projects } from "../constants";

export function Projects() {
  return (
    <Row className="container" id="project">
      <Col span={24}>
        <Typography.Title level={1}>Latest Works</Typography.Title>
      </Col>
      <Col span={24}>
        <Tabs tabPosition="left">
        <Tabs.TabPane tab={"All (17)"}>
        <Row gutter={[16,16]}>
                {projects.map((project, idx) => {

                  return (<Col key={idx} xs={24} md={8} lg={6}>
                    <a href={project.liveurl}><Card
                      hoverable
                      
                      cover={
                        <img
                          alt={project.title}
                          src={project.imageurl}
                          title={`${project.title}`}
                          
                        />
                      }
                      actions={[
                        <a
                          href={project.liveurl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <DesktopOutlined />
                        </a>,
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GithubFilled />
                        </a>,
                      ]}
                    >
                      <Card.Meta
                        title={project.title}
                        description={project.description}
                      />
                      <Divider />
                      <Space wrap size={"small"}>
                        {project.tags.map( (tag, idx) => <Tag color={"gold"} key={idx}>{tag}</Tag>)}
                      </Space>
                    </Card></a>
                  </Col>)
                })}
              </Row>
        </Tabs.TabPane>
          {categories.map((cat, idx) => (
            <Tabs.TabPane tab={cat.toLocaleUpperCase()} key={idx}>
              <Row gutter={[16,16]}>
                {projects.map((project, idx) => {

                    if(project.category !== cat){
                        return null
                    }
                  return (<Col key={idx} xs={24} md={8} lg={6}>
                    <a href={project.liveurl}><Card
                      hoverable
                      
                      cover={
                        <img
                          alt={project.title}
                          src={project.imageurl}
                          title={`${project.title}`}
                          
                        />
                      }
                      actions={[
                        <a
                          href={project.liveurl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <DesktopOutlined />
                        </a>,
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GithubFilled />
                        </a>,
                      ]}
                    >
                      <Card.Meta
                        title={project.title}
                        description={project.description}
                      />
                      <Divider />
                      <Space wrap size={"small"}>
                        {project.tags.map( (tag, idx) => <Tag color={"gold"} key={idx}>{tag}</Tag>)}
                      </Space>
                    </Card></a>
                  </Col>)
                })}
              </Row>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </Col>
    </Row>
  );
}
