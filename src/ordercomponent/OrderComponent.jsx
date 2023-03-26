import React from "react";
import ColorComponent from "./colorcomponent/ColorComponent";
import InputComponent from "./inputcomponent/InputComponent";
import DropdownComponent from "./dropdowncomponent/DropdownComponent";
import NoteComponent from "./notescomponent/NoteComponent";
import GreyComponent from "./greycomponent/GreyComponent";
import style from "./OrderComponent.module.css";


const orderComponent = () => {
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
        </div>
    );
}

export default orderComponent;