import ModalWindow from '../ModalWindow/ModalWindow';
import useModal from '../ModalWindow/UseModalWindow';
import './ServiceBlock.css';
export default function ServiceBlock() {
    const { isOpenModal, openModal, closeModal } = useModal();
    return (
        <div className="service-block" draggable="false">
            <h1 style={{ fontSize: '52px' }}>УСЛУГИ</h1>
            <p style={{ fontSize: '27px' }}>
                Создаю
                <span style={{ color: '#4824ff' }}> статический дизайн </span>
                по следующим направлениям:
            </p>
            <div style={{ display: 'flex' }}>
                <div className="tag">
                    <div className="icon"></div> {/* Добавлено */}
                    <span className="tag-icon">Рекламные банеры</span>
                </div>
                <div className="tag">
                    <div className="icon"></div> {/* Добавлено */}
                    <span className="tag-icon">Привью для видео Ютуб</span>
                </div>
                <div className="tag">
                    <div className="icon"></div> {/* Добавлено */}
                    <span className="tag-icon">Оформление ютуб каналов</span>
                </div>
                <div className="tag">
                    <div className="icon"></div> {/* Добавлено */}
                    <span className="tag-icon">Инфографика</span>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '16px' }}>
                <div className="tag">
                    <div className="icon"></div> {/* Добавлено */}
                    <span className="tag-icon">Оформление для Инстаграм</span>
                </div>
                <div className="tag">
                    <div className="icon"></div> {/* Добавлено */}
                    <span className="tag-icon">Оформление для Фейсбук</span>
                </div>
            </div>
            <p style={{ fontSize: '27px' }}>
                Открыт для обсуждения создания дизайна и по другим направлениям.{' '}
                <br />
                <span
                    style={{ color: '#4824ff', cursor: 'pointer' }}
                    onClick={openModal}
                >
                    личной переписке
                </span>
                .
            </p>
            <ModalWindow show={isOpenModal} onClose={closeModal} />
        </div>
    );
}
