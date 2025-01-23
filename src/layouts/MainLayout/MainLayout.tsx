import { Container } from "react-bootstrap";
import Header from "@components/common/Header/Header";
import Footer from "@components/common/Footer/Footer";

import styles from "./style.module.css";
const {container , wrapper} =styles;

const MainLayout = () => {
  return (
    <Container className={container}>
        <Header/>
        <div className={wrapper} >hi</div>
          <Footer/>
    </Container>
  )
}

export default MainLayout