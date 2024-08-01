/*import React, { createContext, useState } from 'react';

// Tworzymy kontekst
export const UserContext = createContext();

// Tworzymy dostawcę kontekstu
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        experience: [],
        generalInfo: {},
        schoolInfo: {},
    });

    const updateExperience = (experience) => {
        setUserData(prevData => ({ ...prevData, experience }));
    };

    const updateGeneralInfo = (generalInfo) => {
        setUserData(prevData => ({ ...prevData, generalInfo }));
    };

    const updateSchoolInfo = (schoolInfo) => {
        setUserData(prevData => ({ ...prevData, schoolInfo }));
    };

    return (
        <UserContext.Provider value={{ userData, updateExperience, updateGeneralInfo, updateSchoolInfo }}>
            {children}
        </UserContext.Provider>
    );
};
*/
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        generalInfo: {
            name: '',
            email: '',
            phone: '',
        },
        experience: [
            { position: '', responsibilities: '', duration: '' }
        ],
        schoolInfo: {
            institutions: [
                { school_name: '', school_course: '', school_graduation_year: '' }
            ]
        }
    });

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};
