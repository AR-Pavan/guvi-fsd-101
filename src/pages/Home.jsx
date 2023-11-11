import React from "react";
import { Button, Container } from "react-bootstrap";
import "../styles/Home.css";
const Home = () => {
  return (
    <Container>
      <h1>Welcome to our website</h1>
      <p>We are here to serve you</p>
      <Button>Let's get started</Button>
    </Container>
  );
};

export default Home;
