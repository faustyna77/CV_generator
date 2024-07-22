import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const SchoolInfo = ({ data, onChange, onAdd }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSchools = data.map((school, i) =>
      i === index ? { ...school, [name]: value } : school
    );
    onChange(updatedSchools);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Informacje o Szkole</h2>
      {data.map((school, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Nazwa szkoły</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    name="school_name"
                    value={school.school_name}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Nazwa szkoły"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Kierunek studiów</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    name="school_course"
                    value={school.school_course}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Kierunek studiów"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Rok ukończenia</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    name="school_graduation_year"
                    value={school.school_graduation_year}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Rok ukończenia"
                  />
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      ))}
      <Button variant="primary" onClick={onAdd}>Dodaj kolejne wykształcenie</Button>
    </Container>
  );
};

export default SchoolInfo;
