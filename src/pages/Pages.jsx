import React from 'react'
import ContentWrapperComponent from '../contentWrapper/ContentWrapperComponent'
import style from './Pages.module.css'
import ContactInformationWrapper from '../contactInformationComponents/ContactInformationWrapper'

const titles = [
    {text: 'Ввод данных'},
    {text: 'Контактная информация'}
]


export const MainPages = (props) => {
    return (
        <div>
            <div className={style.wrapper}>
                <Header title={titles.at(0)}/>
                <div className={style.body}>
                    <ContentWrapperComponent onChange={props.onChange}/>
                </div>
            </div>
        </div>
    )
}

export const ContactPages = (props) => {

    return (
        <div>
            <div className={style.wrapper}>
                <Header title={titles.at(1)}/>
                <div className={style.body}>
                    <ContactInformationWrapper onChange={props.onChange} onClick={props.onClick}/>
                </div>
            </div>
        </div>
    )
}

function Header(props) {
    return (
        <header className="m-4 ml-6">
            <h6 className="title is-2 has-text-white"> {props.title.text} </h6>
        </header>
    );
}