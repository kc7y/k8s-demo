import React, {Component} from 'react'; 

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import PostForm from './components/Form/Form';
import Display from './components/Display/Display';

class App extends Component { 
    constructor(props) {
        super(props);
        this.state = { force: false, BACKEND_URL: props.BACKEND_URL };
    }

    render() { 
        return (
            <div className="App" style={{backgroundColor: "#282c34", minHeight: '100vh'}}>
                <Container fluid>
                    <Row>
                        <Col className="text-center">
                            <h1 className="text-white">Fake Twitter</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <PostForm BACKEND_URL={this.state.BACKEND_URL}></PostForm>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Display BACKEND_URL={this.state.BACKEND_URL}></Display>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    } 
} 

export default App;

// This gets called on every request
export async function getServerSideProps() {
    return { props: { BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL } }
}
