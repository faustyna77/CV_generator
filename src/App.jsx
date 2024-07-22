// App.js
import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import SchoolInfo from './components/SchoolInfo';
import ExperienceInfo from './components/ExperienceInfo';
import { jsPDF } from 'jspdf';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContainer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const ColorButton = styled.button`
  background-color: ${({ selected }) => (selected ? '#0056b3' : '#007bff')};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  margin-top: 20px;
`;

function App() {
  const colors = ["pink", "blue", "yellow", "green"];
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  const changeColor = (color) => () => {
    setBackgroundColor(color);
  };

  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [schools, setSchools] = useState([
    { school_name: '', school_course: '', school_graduation_year: '' }
  ]);

  const [experience, setExperience] = useState([
    { position: '', responsibilities: '', duration: '' }
  ]);

  const [photo, setPhoto] = useState(null);

  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  const handleSchoolChange = (index, field, value) => {
    const updatedSchools = [...schools];
    updatedSchools[index][field] = value;
    setSchools(updatedSchools);
  };

  const handleAddSchool = () => {
    setSchools([...schools, { school_name: '', school_course: '', school_graduation_year: '' }]);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { position: '', responsibilities: '', duration: '' }]);
  };

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    const addText = () => {
      let y = 20; // Startowa pozycja Y
    
      doc.setFontSize(12);
      
      doc.text('General Information', 10, y);
      y += 10;
      
      doc.text(`Name: ${generalInfo.name}`, 10, y);
      y += 10;
      doc.text(`Email: ${generalInfo.email}`, 10, y);
      y += 10;
      doc.text(`Phone: ${generalInfo.phone}`, 10, y);
      y += 20;
      
      doc.text('School Information', 10, y);
      y += 10;
      
      schools.forEach((school, index) => {
        if (y > 250) { // Sprawdzenie czy jest wystarczająco miejsca na stronie
          doc.addPage(); // Dodaj nową stronę
          y = 20; // Resetowanie pozycji Y
        }
        doc.text(`Szkoła ${index + 1}`, 10, y);
        y += 10;
        doc.text(`Nazwa: ${school.school_name}`, 10, y);
        y += 10;
        doc.text(`Kierunek: ${school.school_course}`, 10, y);
        y += 10;
        doc.text(`Graduation Year: ${school.school_graduation_year}`, 10, y);
        y += 20;
      });
      
      doc.text('Informacje o doświadczeniu', 10, y);
      y += 10;
      
      experience.forEach((exp, index) => {
        if (y > 250) { // Sprawdzenie czy jest wystarczająco miejsca na stronie
          doc.addPage(); // Dodaj nową stronę
          y = 20; // Resetowanie pozycji Y
        }
        doc.text(`Experience ${index + 1}`, 10, y);
        y += 10;
        doc.text(`Position: ${exp.position}`, 10, y);
        y += 10;
        doc.text(`Responsibilities: ${exp.responsibilities}`, 10, y);
        y += 10;
        doc.text(`Duration: ${exp.duration}`, 10, y);
        y += 20;
      });
      
      doc.save('CV.pdf');
    };
    
    if (photo) {
      const img = new Image();
      img.src = photo;
      img.onload = () => {
        doc.addImage(img, 'JPEG', 10, 10, 50, 50);
        addText();
      };
    } else {
      addText();
    }
  };

  return (
    <AppContainer backgroundColor={backgroundColor}>
      <h1>CV</h1>
      {colors.map((color) => (
        <ColorButton
          type="button"
          key={color}
          onClick={changeColor(color)}
          selected={backgroundColor === color}
        >
          {color}
        </ColorButton>
      ))}

      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      {photo && <ProfileImage src={photo} alt="Profile" width="100" />}

      <div className="container">
        <GeneralInfo data={generalInfo} onChange={handleGeneralInfoChange} />
        <SchoolInfo data={schools} onChange={handleSchoolChange} onAdd={handleAddSchool} />
        <ExperienceInfo data={experience} onChange={handleExperienceChange} onAdd={handleAddExperience} />
      </div>

      <button className="btn btn-primary mt-3" onClick={generatePDF}>Generate PDF</button>
    </AppContainer>
  );
}

export default App;
