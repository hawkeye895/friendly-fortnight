import React from 'react';
import img from './image.png';
import Tilt from 'react-tilt'

const words = [
    {
        id: 1,
        name: 'Andy',
        age: 21
    },
    {
        id: 2,
        name: 'Wayne',
        age: 35
    },
    {
        id: 3,
        name: 'Ronng',
        age: 19
    }
]


export default function List() {
    const wordlist = words.map((word) =>
        <ol key={word.id}>
            <Tilt>
                <li>{word.name}</li>
                <li>{word.age}</li>
            </Tilt>

        </ol>);
    return (
        <div><Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }}><img src={require('./image.png')} alt="Logo" /></Tilt>

            {wordlist}
        </div>
    )
}
