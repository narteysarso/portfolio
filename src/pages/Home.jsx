import { Layout } from "antd"
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";

const { Header, Content, Footer } = Layout;

export function Home() {
    return (
        <Layout className="layout" >
            <Header className="bg-transparent" theme="light">
                <Navbar />
            </Header>
            <Content>
                <Content>
                <About id="about"  />
                <Experience id="experience" />
                <Projects id="project" />
                </Content>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}