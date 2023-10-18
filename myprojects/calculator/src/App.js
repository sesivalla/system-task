import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function App() {
  const [input, setInput] = useState('');
  
  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(String(eval(input)));
    } catch (e) {
      setInput('Error');
    }
  };

  const clear = () => {
    setInput('');
  };

  return (
    <Container className="mt-5">
      <Row className="mb-3">
        <Col>
          <Form.Control value={input} readOnly />
        </Col>
      </Row>

      {[['7', '8', '9', '/'],
       ['4', '5', '6', '*'],
       ['1', '2', '3', '-'],
       ['0', '.', '=', '+']].map((row, idx) => (
        <Row className="mb-3" key={idx}>
          {row.map((char) => 
            <Col key={char}>
              <Button 
                block 
                onClick={char === '=' ? calculate : () => handleClick(char)}
              >
                {char}
              </Button>
            </Col>
          )}
        </Row>
      ))}

      <Row className="mb-3">
        <Col>
          <Button block variant="danger" onClick={clear}>C</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
