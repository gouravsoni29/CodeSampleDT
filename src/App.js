import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { toast, ToastContainer } from 'react-toastify';
import { Col, Container, Row, } from 'reactstrap';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vehicle from './components/Vehicle';
import AddEcu from './components/AddEcu';
import AddElement from './components/AddElement';
// import MyComponent from './components/MyComponent';
// import Tippy from '@tippyjs/react';

function App() {
  return (
    <div>
      <ToastContainer />
      <Container>
        <Header />
        <Row>
        <Col md={12} sm={12} xs={12}>
        <Vehicle />
        </Col>
        <AddEcu/>
        </Row>
        {/* <AddElement/> */}
      </Container>

      

    </div>
  );
}

export default App;
