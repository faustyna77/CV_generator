import React, { useState } from 'react';


const GeneralInformation = ({ generalInfo, setGeneralInfo }) => {
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      {editing ? (
        <div>
          <input type="text" name="name" value={generalInfo.name} onChange={handleChange} placeholder="Name" />
          <input type="email" name="email" value={generalInfo.email} onChange={handleChange} placeholder="Email" />
          <input type="tel" name="phone" value={generalInfo.phone} onChange={handleChange} placeholder="Phone" />
          <button onClick={toggleEdit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInformation;
