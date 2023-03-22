import React from "react";
import ColorComponent from "./colorcomponent/ColorComponent";
import InputComponent from "./inputcomponent/InputComponent";
import DropdownComponent from "./dropdowncomponent/DropdownComponent";
import NoteComponent from "./notescomponent/NoteComponent";
import style from "./OrderComponent.module.css";


const orderComponent = () => {
    return (
        <div className={style.horizontalContainer}>
            <ColorComponent/>
            <InputComponent/>
            <DropdownComponent options={[
                {value: 'option1', label: 'Профиль 1'},
                {value: 'option2', label: 'Профиль 2'},
                {value: 'option3', label: 'Профиль 3'},
                {value: 'option4', label: 'Профиль 4'},
                {value: 'option5', label: 'Профиль 5'},
            ]} label={'Выберите профиль: '}/>
            <DropdownComponent options={[
                {value: 'option1', label: 'Артикул 1'},
                {value: 'option2', label: 'Артикул 2'},
                {value: 'option3', label: 'Артикул 3'},
                {value: 'option4', label: 'Артикул 4'},
                {value: 'option5', label: 'Артикул 5'},
            ]} label={'Выберите Артикул: '}/>
            <NoteComponent/>
        </div>
    );
}

export default orderComponent;