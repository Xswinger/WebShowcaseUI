import React from "react";
import ColorComponent from "./positionComponents/colorcomponent/ColorComponent";
import InputComponent from "./positionComponents/inputcomponent/InputComponent";
import DropdownComponent from "./positionComponents/dropdowncomponent/DropdownComponent";
import NoteComponent from "./positionComponents/notescomponent/NoteComponent";
import GreyComponent from "./positionComponents/greycomponent/GreyComponent";
import style from "./PositionComponent.module.css";


const PositionComponent = (props) => {

    const handleRemoveClick = () => {
        props.onRemove(props.index);
    };

    return (
        <div className={style.container}>
            <GreyComponent>
                <ColorComponent/>
            </GreyComponent>
            <GreyComponent>
                <InputComponent name={'counter'} label={'Введите количество (1-99):'}/>
            </GreyComponent>
            <GreyComponent>
                <DropdownComponent options={[
                    {value: 'option1', label: 'Профиль 1'},
                    {value: 'option2', label: 'Профиль 2'},
                    {value: 'option3', label: 'Профиль 3'},
                    {value: 'option4', label: 'Профиль 4'},
                    {value: 'option5', label: 'Профиль 5'},
                ]} label={'Выберите профиль: '}/>
            </GreyComponent>
            <GreyComponent>
                <DropdownComponent options={[
                    {value: 'option1', label: 'Артикул 1'},
                    {value: 'option2', label: 'Артикул 2'},
                    {value: 'option3', label: 'Артикул 3'},
                    {value: 'option4', label: 'Артикул 4'},
                    {value: 'option5', label: 'Артикул 5'},
                ]} label={'Выберите Артикул: '}/>
            </GreyComponent>
            <GreyComponent>
                <NoteComponent/>
            </GreyComponent>
            <GreyComponent>
                <button onClick={handleRemoveClick}>Remove</button>
            </GreyComponent>
        </div>
    );
}

export default PositionComponent;