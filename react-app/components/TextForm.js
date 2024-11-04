import React, { useState } from 'react';
import { postTextRequest } from '../services/api';

function TextForm() {
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await postTextRequest(text);
            setResponse(data.Response);
        } catch (error) {
            setResponse('Error to process request');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Digite o texto aqui"
                />
            <button type="submit">Enviar</button>
            </form>
            {response && <p>Resposta: {response}</p>}
        </div>
    );
}

export default TextForm;
