import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { currentweather } from "../JS/actions/weatherActions";
import { Link } from "react-router-dom";

const NavSearch = () => {
    const dispatch=useDispatch()
  return (
    <div>
      <Navbar className="search" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to={'/'}>
        <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"/>
        </Link>
          </Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex"onSubmit={(e)=>e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>dispatch(currentweather(e.target.value))}
            />
          </Form>
          {/* <input type="text" onChange={(e)=>dispatch(currentweather(e.target.value))}/> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavSearch;
