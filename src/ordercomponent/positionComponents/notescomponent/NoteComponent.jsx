import React, { useState } from 'react';
import style from './NoteComponent.module.css';

function noteComponent(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [note, setNote] = useState('');

    const handleNoteChange = (event) => {
        setNote(event.target.value);
        props.onChange("Note", event.target.value);
    }

    return (
        <div className={style.notes}>
            <label htmlFor={'note'}>Примечания:</label>
            <div className="field">
                <div className="control">
                    <textarea name={'note'} value={note} onChange={handleNoteChange} className="textarea is-small"/>
                </div>
            </div>
        </div>
    );
}

export default noteComponent;
