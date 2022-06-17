import { Col, Row, Timeline, Typography } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

export function Experience() {
  return (
    <Row justify="center" className="container bg-white">
      <Col span={24}>
        <Typography.Title>My Work Experience</Typography.Title>
      </Col>
      <Col span={18}>
        <Timeline mode="left">
          <Timeline.Item
            label={
              <>
                <Typography.Title level={3}>The/Studio</Typography.Title>
                <Typography.Text>2021</Typography.Text>
              </>
            }
          >
            <Typography.Title level={3}>
              Software Engineer (remote)
            </Typography.Title>
			Full stack developer on a SaaS Ecommerce platform that powers live product sales on facebook live
          </Timeline.Item>
          <Timeline.Item
            label={
              <>
                <Typography.Title level={3}> Codetrain</Typography.Title>
                <Typography.Text>2018-2021</Typography.Text>
              </>
            }
            color="green"
          >
            <Typography.Title level={3}>
              Software Engineer/Teaching fellow
            </Typography.Title>
            Over the period I have taught and mentored over 150 students on web,
            backend, and mobile application development with 80% job placement
            successes for entry level roles
          </Timeline.Item>
          <Timeline.Item
            label={
              <>
                <Typography.Title level={3}> Amidar-Amole</Typography.Title>
                <Typography.Text>2018 – 2019</Typography.Text>
              </>
            }
          >
            <Typography.Title level={3}>Software Engineer</Typography.Title>
          </Timeline.Item>
          <Timeline.Item
            color="red"
            label={
              <>
                <Typography.Title level={3}> TWDT</Typography.Title>
                <Typography.Text>2015 - 2018</Typography.Text>
              </>
            }
          >
            <Typography.Title level={3}>Web and App developer</Typography.Title>
            (A university student Led web development group) The team was
            awarded Best Innovative Team by the Student Representative Council
            in 2017. The also was the 2nd Runner up in annual UENR Innovate
            challenge in 2018
          </Timeline.Item>
        </Timeline>
      </Col>
    </Row>
  );
}
