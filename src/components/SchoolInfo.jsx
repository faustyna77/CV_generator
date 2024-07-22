import React from 'react';

const SchoolInfo = ({ data, onChange, onAdd }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSchools = data.map((school, i) =>
      i === index ? { ...school, [name]: value } : school
    );
    onChange(updatedSchools);
  };

  return (
    <div>
      <h2>Informacje o Szkole</h2>
      {data.map((school, index) => (
        <div key={index}>
          <input
            type="text"
            name="school_name"
            value={school.school_name}
            onChange={(e) => handleChange(index, e)}
            placeholder="Nazwa szkoły"
          />
          <input
            type="text"
            name="school_course"
            value={school.school_course}
            onChange={(e) => handleChange(index, e)}
            placeholder="Kierunek studiów"
          />
          <input
            type="text"
            name="school_graduation_year"
            value={school.school_graduation_year}
            onChange={(e) => handleChange(index, e)}
            placeholder="Rok ukończenia"
          />
        </div>
      ))}
      <button onClick={onAdd}>Dodaj kolejne wykształcenie</button>
    </div>
  );
};

export default SchoolInfo;
