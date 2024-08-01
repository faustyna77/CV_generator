

import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

const AIGenerator = () => {
    const { userData } = useContext(UserContext);
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Dodaj domyślne wartości dla userData
        const generalInfo = userData.generalInfo || {};
        const experience = userData.experience || [];
        const schoolInfo = userData.schoolInfo || { institutions: [] };

        const prompt = ` napisz jakąs przykładową treść podsumowania do CV uwzgledniająć informacje podane przez uzytkownika${generalInfo.name}
        
        , ${generalInfo.email}
        , ${experience.map(exp => `${exp.position } - ${exp.responsibilities }, ${exp.duration }`).join('; ')}`
       

        const apiKey = process.env.OPENAI_API_KEY
       // Upewnij się, że używasz poprawnego klucza API
        const endpoint = 'https://openaichatggg.openai.azure.com/openai/deployments/openaichatggg/completions?api-version=2023-09-15-preview';

        try {
            const result = await axios.post(endpoint, 
                {
                    prompt: prompt,
                    max_tokens: 700,
                    temperature: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,
                    top_p: 0.5,
                    stop: null,
                }, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': apiKey,
                    }
                }
            );
            setResponse(result.data.choices[0].text);
        } catch (error) {
            console.error('Error fetching completion:', error);
            setResponse('Błąd, spróbuj ponownie za chwilę');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Generuj list podsumowujący </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <button type="submit" className="btn btn-primary">Generuj</button>
                            </form>
                        </div>
                    </div>
                    {response && (
                        <div className="card mt-4">
                            <div className="card-header">Przykładowa treść </div>
                            <div className="card-body">
                                <p>{response}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AIGenerator;




/*
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

const AIGenerator = ({ onCoverLetterGenerated }) => {
    const { userData } = useContext(UserContext);
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure we have user data
        const generalInfo = userData.generalInfo;
        const experience = userData.experience;
        const schoolInfo = userData.schoolInfo.institutions;

        // Create a prompt with user data
        const prompt = `
            Szanowny Panie/Pani,

            Jestem bardzo zainteresowany/a możliwością pracy w Państwa firmie i chciałbym przedstawić się Państwu bliżej. Nazywam się ${generalInfo.name} i jestem absolwentem/absolwentką ${schoolInfo[0]?.school_name || '[nazwa uczelni]'}. W trakcie studiów skupiałam/em się na ${schoolInfo[0]?.school_course || '[kierunek studiów]'}. 

            Mam następujące doświadczenia:
            ${experience.map(exp => `${exp.position} - ${exp.responsibilities}, ${exp.duration}`).join('; ')}

            Chętnie podzielę się więcej szczegółami podczas rozmowy kwalifikacyjnej.

            Z poważaniem,
            ${generalInfo.name}
            Email: ${generalInfo.email}
        `;

        const apiKey = '13a3075b408a4b06847d6e016c6816d1'; // Upewnij się, że używasz poprawnego klucza API
        const endpoint = 'https://openaichatggg.openai.azure.com/openai/deployments/openaichatggg/completions?api-version=2023-09-15-preview';

        try {
            const result = await axios.post(endpoint, 
                {
                    prompt: prompt,
                    max_tokens: 300,
                    temperature: 0.7,
                    top_p: 0.9,
                }, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': apiKey,
                    }
                }
            );

            const generatedText = result.data.choices[0].text;
            setResponse(generatedText);
            onCoverLetterGenerated(generatedText);
        } catch (error) {
            console.error('Error fetching completion:', error);
            setResponse('Error fetching response from API');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Generate Cover Letter</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <button type="submit" className="btn btn-primary">Generate</button>
                            </form>
                        </div>
                    </div>
                    {response && (
                        <div className="card mt-4">
                            <div className="card-header">AI Response</div>
                            <div className="card-body">
                                <p>{response}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AIGenerator;
*/