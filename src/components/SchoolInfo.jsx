import React, { useState } from 'react';
import { Container, Button, Form, Card } from 'react-bootstrap';

const SchoolInfo = ({ data, onChange, onAdd }) => {
  const [editing, setEditing] = useState(false);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSchools = data.map((school, i) =>
      i === index ? { ...school, [name]: value } : school
    );
    onChange(updatedSchools);
  };

  const handleEdit = () => setEditing(true);
  const handleSave = () => setEditing(false);

  return (
    <Container className="mt-4 p-4 bg-light rounded shadow">
      <h2 className="mb-4">Informacje o Szkole</h2>
      {data.map((school, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            {editing ? (
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nazwa szkoły</Form.Label>
                  <Form.Control
                    type="text"
                    name="school_name"
                    value={school.school_name || ''}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Nazwa szkoły"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Kierunek studiów</Form.Label>
                  <Form.Control
                    type="text"
                    name="school_course"
                    value={school.school_course || ''}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Kierunek studiów"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Rok ukończenia</Form.Label>
                  <Form.Control
                    type="text"
                    name="school_graduation_year"
                    value={school.school_graduation_year || ''}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Rok ukończenia"
                  />
                </Form.Group>
              </Form>
            ) : (
              <div>
                <p><strong>Nazwa szkoły:</strong> {school.school_name}</p>
                <p><strong>Kierunek studiów:</strong> {school.school_course}</p>
                <p><strong>Rok ukończenia:</strong> {school.school_graduation_year}</p>
              </div>
            )}
          </Card.Body>
        </Card>
      ))}
      <Button variant="primary" onClick={editing ? handleSave : handleEdit}>
        {editing ? 'Zapisz' : 'Edytuj'}
      </Button>
      {editing && (
        <Button variant="secondary" onClick={onAdd} className="ml-2">
          Dodaj kolejne wykształcenie
        </Button>
      )}
    </Container>
  );
};

export default SchoolInfo;
