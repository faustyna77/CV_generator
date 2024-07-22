import React, { useState } from 'react';
import { Button, Form, Card, Container } from 'react-bootstrap';

const ExperienceInfo = ({ data, onChange, onAdd }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = data.map((experience, i) =>
      i === index ? { ...experience, [name]: value } : experience
    );
    onChange(updatedExperience);
  };

  const [editing, setEditing] = useState(false);

  const handleEdit = () => setEditing(true);
  const handleSave = () => setEditing(false);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Informacje o Doświadczeniu</h2>
      {data.map((experience, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            {editing ? (
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nazwa stanowiska</Form.Label>
                  <Form.Control
                    type="text"
                    name="position"
                    value={experience.position}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Nazwa stanowiska"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Obowiązki</Form.Label>
                  <Form.Control
                    type="text"
                    name="responsibilities"
                    value={experience.responsibilities}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Obowiązki"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Okres zatrudnienia</Form.Label>
                  <Form.Control
                    type="text"
                    name="duration"
                    value={experience.duration}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Okres zatrudnienia"
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleSave}>Zapisz</Button>
              </Form>
            ) : (
              <div>
                <p><strong>Nazwa stanowiska:</strong> {experience.position}</p>
                <p><strong>Obowiązki:</strong> {experience.responsibilities}</p>
                <p><strong>Okres zatrudnienia:</strong> {experience.duration}</p>
                <Button variant="secondary" onClick={handleEdit}>Edytuj</Button>
              </div>
            )}
          </Card.Body>
        </Card>
      ))}
      {editing && <Button variant="success" onClick={onAdd}>Dodaj Doświadczenie</Button>}
    </Container>
  );
};

export default ExperienceInfo;
