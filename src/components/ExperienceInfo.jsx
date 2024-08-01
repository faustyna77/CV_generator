
import React, { useState } from 'react';
import { Button, Form, Card, Container } from 'react-bootstrap';

const ExperienceInfo = ({ data, onChange, onAdd }) => {
    const [editing, setEditing] = useState(false);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExperience = data.map((exp, i) =>
            i === index ? { ...exp, [name]: value } : exp
        );
        onChange(updatedExperience);
    };

    const handleEdit = () => setEditing(true);
    const handleSave = () => setEditing(false);

    return (
        <Container className="mt-4 p-4 bg-light rounded shadow">
            <h2 className="mb-4">Informacje o Doświadczeniu</h2>
            {data.map((exp, index) => (
                <Card key={index} className="mb-3">
                    <Card.Body>
                        {editing ? (
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nazwa stanowiska</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="position"
                                        value={exp.position}
                                        onChange={(e) => handleChange(index, e)}
                                        placeholder="Nazwa stanowiska"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Obowiązki</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="responsibilities"
                                        value={exp.responsibilities}
                                        onChange={(e) => handleChange(index, e)}
                                        placeholder="Obowiązki"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Okres zatrudnienia</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="duration"
                                        value={exp.duration}
                                        onChange={(e) => handleChange(index, e)}
                                        placeholder="Okres zatrudnienia"
                                    />
                                </Form.Group>
                            </Form>
                        ) : (
                            <div>
                                <p><strong>Nazwa stanowiska:</strong> {exp.position}</p>
                                <p><strong>Obowiązki:</strong> {exp.responsibilities}</p>
                                <p><strong>Okres zatrudnienia:</strong> {exp.duration}</p>
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
                    Dodaj doświadczenie
                </Button>
            )}
        </Container>
    );
};

export default ExperienceInfo;


