import React from "react";
import ColorComponent from "./positionComponents/colorcomponent/ColorComponent";
import InputComponent from "./positionComponents/inputcomponent/InputComponent";
import DropdownComponent from "./positionComponents/dropdowncomponent/DropdownComponent";
import NoteComponent from "./positionComponents/notescomponent/NoteComponent";
import GreyComponent from "./positionComponents/greycomponent/GreyComponent";


const PositionComponent = (props) => {

    const handleRemoveClick = () => {
        props.onRemove(props.index);
        console.log('from root:', props.articles.data)
        console.log('from root:', props.profiles.data)
    };

    const handleOnChange = (field, value) => {
        props.onChange(props.index, field, value);
    }

    return (
        <div className="columns" style={{backgroundColor: "#696969", borderRadius: "20px", justifyContent: "space-evenly", margin: "0 0 5px 0"}}>
            <GreyComponent>
                <ColorComponent onChange={handleOnChange} colors={props.colors}/>
            </GreyComponent>
            <GreyComponent>
                <InputComponent name={'counter'} label={'Введите количество (1-99):'} onChange={handleOnChange}/>
            </GreyComponent>
            <GreyComponent>
                <DropdownComponent options={props.profiles.data.map(
                    item => ({
                      value: 'option' + item.id,
                      label: item.name
                    }))} label={'Выберите профиль: '} type={'profile'} onChange={handleOnChange}/>
            </GreyComponent>
            <GreyComponent>
                <DropdownComponent options={props.articles.data.map(
                    item => ({
                        value: 'option' + item.id,
                        label: item.name
                    }))} label={'Выберите Артикул: '} type={'article'} onChange={handleOnChange}/>
            </GreyComponent>
            <GreyComponent>
                <NoteComponent onChange={handleOnChange}/>
            </GreyComponent>
            <GreyComponent>
                <button className="button is-danger" onClick={handleRemoveClick}>Удалить</button>
            </GreyComponent>
        </div>
    );
}

export default PositionComponent;