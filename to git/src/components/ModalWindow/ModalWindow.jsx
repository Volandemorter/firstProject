import React, { useState, useCallback, useEffect, Children } from 'react';
import './ModalWindow.css';
const defaultContent = (
    <>
        <h2 className="modal-title">Контакты</h2>
        <p className="modal-description">
            Вы можете связаться со мной в Телеграм <br /> или по Mail
        </p>
        <div className="social-buttons-container">
            <a
                href="https://t.me/volandemorter"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button telegram"
            >
                <span className="button-text">Telegram</span>
            </a>
            <a
                href="mailto:vova_aryasov@mail.ru?subject=%D0%BF%D0%B8%D1%88%D1%83%20%D1%81%20%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button mail"
            >
                <span className="button-text">Mail</span>
            </a>
        </div>
    </>
);
const ModalWindow = ({ show, onClose, children = defaultContent }) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleKeyDown = useCallback(
        (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        },
        [onClose]
    );
    useEffect(() => {
        if (show) {
            setIsVisible(true);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 800);
            document.removeEventListener('keydown', handleKeyDown);
            return () => clearTimeout(timer);
        }
    }, [show, handleKeyDown]);
    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div
            className={`modal-backdrop ${show ? 'show' : ''}`}
            style={{ display: isVisible }}
            onClick={onClose}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="modal-close-button"
                    aria-label="Close modal"
                ></button>
                {children}
            </div>
        </div>
    );
};
export default ModalWindow;
