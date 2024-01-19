import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './Image';
import Name from './Name';
import Desription from './Desription';
import Price from './Price';
import Img from './Img';


function App() {
  const firstName=prompt("Enter your first name ,please")
  return (
    <div className="App">
      <div>{firstName && <Img/>}</div>
      <h4>{ firstName?`Welcome ${firstName} in our happy store!`:"Hello,there!"}</h4>
      <h1>Here, you can buy happiness!!!</h1>
      <Card className='card' style={{ width: '25rem' }}>
        <Image/>
        <Card.Body>
          <Card.Title><Name/></Card.Title>
          <Price/>
          <Card.Text>
            <Desription/>
          </Card.Text>
          <Button variant="primary">Buy Now!</Button>
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default App;
