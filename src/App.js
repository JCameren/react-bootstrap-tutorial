import './App.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from '/home/syogeki/react-bootstrap-tutorial/src/imgs/chibi-me.png'

function App() {
  return (
    <div className="App">


      <header className="App-header">

      <Form>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="example@email.com" />
          <Form.Text className='text-muted'>
            We'll never share your email address, trust us!
          </Form.Text>
        </Form.Group>
        <Button variant='secondary' type='submit'>Submit</Button>
      </Form>
        <Card className="mt-5" style={{color: '#000', marginBottom: 15 }}>
          <Card.Img src={ProfilePic}/>
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is an example of react bootstrap cards
            </Card.Text>
            <Button variant='primary'>Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <BreadcrumbItem>Test</BreadcrumbItem>
          <BreadcrumbItem>Test 2</BreadcrumbItem>
          <BreadcrumbItem>Test 3</BreadcrumbItem>
        </Breadcrumb>
      <Alert variant="secondary">This is a button</Alert>
        <Button>Test Button</Button>
      </header>
    </div>
  );
}

export default App;
