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

    const handleOnChange = (field, value) => {
        props.onChange(props.index, field, value);
    }

    return (
        <div className={style.container}>
            <GreyComponent>
                <ColorComponent onChange={handleOnChange}/>
            </GreyComponent>
            <GreyComponent>
                <InputComponent name={'counter'} label={'Введите количество (1-99):'} onChange={handleOnChange}/>
            </GreyComponent>
            <GreyComponent>
                <DropdownComponent options={[
                    {value: 'option1', label: 'Профиль 1'},
                    {value: 'option2', label: 'Профиль 2'},
                    {value: 'option3', label: 'Профиль 3'}
                ]} label={'Выберите профиль: '} onChange={handleOnChange}/>
            </GreyComponent>
            <GreyComponent>
                <DropdownComponent options={[
                    {value: 'option1', label: 'Артикул 1'},
                    {value: 'option2', label: 'Артикул 2'},
                    {value: 'option3', label: 'Артикул 3'}
                ]} label={'Выберите Артикул: '} onChange={handleOnChange}/>
            </GreyComponent>
            <GreyComponent>
                <NoteComponent onChange={handleOnChange}    />
            </GreyComponent>
            <GreyComponent>
                <button className="button is-danger" onClick={handleRemoveClick}>Удалить</button>
            </GreyComponent>
        </div>
    );
}

export default PositionComponent;