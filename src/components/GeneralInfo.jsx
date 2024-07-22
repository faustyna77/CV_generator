import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: left;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const Button=styled.button`


`;
const Label = styled.label`
  display: block;
  margin-left:50px;

  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const GeneralInfo = ({ data, onChange}) => {
  const [editing, setEditing] = useState(false);
  const { name, email, phone } = data;

  const handleEdit = () => setEditing(true);
  const handleSave = () => setEditing(false);

  return (
    
    <div>
      
      <Label>Informacje Ogólne</Label>
      {editing ? (
        <div>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Imię i nazwisko"
          />
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
          />
          <Input
            type="text"
            name="phone"
            value={phone}
            onChange={onChange}
            placeholder="Telefon"
          />
          <button onClick={handleSave}>Zapisz</button>
          
        </div>
        
      ) : (
        <div>
          <p>Imię: {name}</p>
          <p>Email: {email}</p>
          <p>Telefon: {phone}</p>
          <button onClick={handleEdit}>Edytuj</button>
          
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
