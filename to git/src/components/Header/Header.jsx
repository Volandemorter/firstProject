import ModalWindow from '../ModalWindow/ModalWindow';
import React, { useState } from 'react';
import './header.css';
import useModal from '../ModalWindow/UseModalWindow';

export default function Header() {
    const { isOpenModal, openModal, closeModal } = useModal();

    return (
        <header className="header">
            <div className="menu">
                <a href="#about">Обо мне</a>
                <a href="#services">Услуги</a>
                <a href="#portfolio">Портфолио</a>
                <a href="#reviews">Отзывы</a>
                <a href="#guarantees">Гарантии</a>
            </div>
            <button onClick={openModal} className="btn">
                Связаться
            </button>

            <ModalWindow show={isOpenModal} onClose={closeModal} />
            <a
                href="https://t.me/volandemorter"
                target="_blank"
                rel="noopener noreferrer"
                className="icon telegram"
            ></a>
            <a
                href="mailto:vova_aryasov@mail.ru?subject=%D0%BF%D0%B8%D1%88%D1%83%20%D1%81%20%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0"
                target="_blank"
                rel="noopener noreferrer"
                className="icon mail"
            ></a>
            <div className="switch">
                <div className="theme light"></div>
            </div>
        </header>
    );
}
