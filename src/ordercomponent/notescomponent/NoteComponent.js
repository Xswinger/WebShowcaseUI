import React, { useState } from 'react';
import style from './NoteComponent.module.css';

function noteComponent() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [note, setNote] = useState('');

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    }

    return (
        <div className={style.notes}>
            <h2>Notes</h2>
            <textarea value={note} onChange={handleNoteChange} />
        </div>
    );
}

export default noteComponent;
