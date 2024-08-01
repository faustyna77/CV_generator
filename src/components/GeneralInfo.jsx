/*import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

const GeneralInfo = ({ data, onChange }) => {
  const [editing, setEditing] = useState(false);
  const { name, email, phone } = data;

  const handleEdit = () => setEditing(true);
  const handleSave = () => setEditing(false);

  return (
    <Container className="mt-4 p-4 bg-light rounded shadow">
      <h2 className="mb-4">Informacje Ogólne</h2>
      {editing ? (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Imię i nazwisko</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Imię i nazwisko"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={phone}
              onChange={onChange}
              placeholder="Telefon"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSave}>Zapisz</Button>
        </Form>
      ) : (
        <div>
          <p><strong>Imię i nazwisko:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Telefon123:</strong> {phone}</p>
          <Button variant="secondary" onClick={handleEdit}>Edytuj</Button>
        </div>
      )}
    </Container>
  );
};

export default GeneralInfo;
*/

import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

const GeneralInfo = ({ data, onChange }) => {
  const [editing, setEditing] = useState(false);
  const { name, email, phone } = data;

  const handleEdit = () => setEditing(true);
  const handleSave = () => setEditing(false);

  return (
    <Container className="mt-4 p-4 bg-light rounded shadow">
      <h2 className="mb-4">Informacje Ogólne</h2>
      {editing ? (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Imię i nazwisko</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Imię i nazwisko"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={phone}
              onChange={onChange}
              placeholder="Telefon"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSave}>Zapisz</Button>
        </Form>
      ) : (
        <div>
          <p><strong>Imię i nazwisko:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Telefon:</strong> {phone}</p>
          <Button variant="secondary" onClick={handleEdit}>Edytuj</Button>
        </div>
      )}
    </Container>
  );
};

export default GeneralInfo;
