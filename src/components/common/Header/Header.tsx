import HeaderBasket from "@components/ecommerce/HeaderBasket/HeaderBasket";

import { Badge ,Nav,Navbar,Container} from "react-bootstrap"
import styles from "./styles.module.css";
const {headerLogo,headerContainer} =styles

const Header = () => {
  return (
    <header>
        <div className={headerContainer}>
        <h1 className={headerLogo}>
            <span>our </span>  
        <Badge>ecommerce</Badge>
        </h1>
       <HeaderBasket/>
            {/* icon of basket */}
        </div>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">categories</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </header>
  )
}

export default Header