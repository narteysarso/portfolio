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
                <About   />
                <Experience  />
                <Projects  />
                </Content>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Hire me <a href="https://linkedin.com/in/narteykodjosarso" rel="noreferrer" target="_blank">Nartey Kodjo-Sarso </a> ©2021</Footer>
        </Layout>
    )
}