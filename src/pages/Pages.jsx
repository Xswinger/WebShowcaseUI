import React from 'react'
import ContentWrapperComponent from '../contentWrapper/ContentWrapperComponent'
import style from './Pages.module.css'
import ContactInformationWrapper from '../contactInformationComponents/ContactInformationWrapper'

const titles = [
    {text: 'Ввод данных'},
    {text: 'Контактная информация'}
]

export const MainPages = () => {
    return (
        <div>
            <div className={style.wrapper}>
                <Header title={titles.at(0)}/>
                <div className={style.body}>
                    <ContentWrapperComponent/>
                </div>
            </div>
        </div>
    )
}

export const ContactPages = () => {
    return (
        <div>
            <div className={style.wrapper}>
                <Header title={titles.at(1)}/>
                <div className={style.body}>
                    <ContactInformationWrapper/>
                </div>
            </div>
        </div>
    )
}

function Header(props) {
    return (
        <header className={style.header}>
            <h1 className={style.title}> {props.title.text} </h1>
        </header>
    );
}