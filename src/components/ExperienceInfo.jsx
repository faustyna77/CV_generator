
/*
const ExperienceInfo = ({ data, onChange }) => {
  const [editing, setEditing] = useState(false);
  const { position, responsibilities, duration } = data;

  const handleEdit = () => setEditing(true);
  const handleSave = () => setEditing(false);

  return (
    <div>
      <h2>Informacje o doświadczeniu</h2>
      {editing ? (
        <div>
          <textarea
            type="text"
            name="position"
            value={position}
            onChange={onChange}
            placeholder="Stanowisko"
          />
          <textarea
            type="text"
            name="responsibilities"
            value={responsibilities}
            onChange={onChange}
            placeholder="Obowiązki"
          />
          <textarea
            type="text"
            name="duration"
            value={duration}
            onChange={onChange}
            placeholder="Okres zatrudnienia"
          />
          <button onClick={handleSave}>Zapisz</button>
        </div>
      ) : (
        <div>
          <p>Stanowisko: {position}</p>
          <p>Obowiązki: {responsibilities}</p>
          <p>Okres zatrudnienia: {duration}</p>
          <button onClick={handleEdit}>Edytuj</button>
        </div>
      )}
    </div>
  );
};

export default ExperienceInfo;
*/

import React, { useState } from 'react';

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
    <div>
      <h2>Informacje o Doświadczeniu</h2>
      {data.map((experience, index) => (
        <div key={index}>
          {editing ? (
            <div>
              <input
                type="text"
                name="position"
                value={experience.position}
                onChange={(e) => handleChange(index, e)}
                placeholder="Nazwa stanowiska"
              />
              <input
                type="text"
                name="responsibilities"
                value={experience.responsibilities}
                onChange={(e) => handleChange(index, e)}
                placeholder="Obowiązki"
              />
              <input
                type="text"
                name="duration"
                value={experience.duration}
                onChange={(e) => handleChange(index, e)}
                placeholder="Okres zatrudnienia"
              />
            </div>
          ) : (
            <div>
              <p>Nazwa stanowiska: {experience.position}</p>
              <p>Obowiązki: {experience.responsibilities}</p>
              <p>Okres zatrudnienia: {experience.duration}</p>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleEdit}>{editing ? 'Zapisz' : 'Edytuj'}</button>
      {editing && <button onClick={onAdd}>Dodaj Doświadczenie</button>}
    </div>
  );
};

export default ExperienceInfo;
