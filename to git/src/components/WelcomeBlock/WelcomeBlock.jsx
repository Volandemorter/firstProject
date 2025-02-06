import './WelcomeBlock.css';
export default function WelcomeBlock() {
    return (
        <div className="welcome-block">
            <div className="first-block">
                <h1>
                    Веб-дизайнер <span className="title">Workford</span>
                </h1>
                <h2 style={{ marginBottom: '7%', marginTop: '7%' }}>
                    Создаю
                    <span style={{ color: '#4824ff' }}> продоваемый</span> и
                    <span style={{ color: '#4824ff' }}> уникальный </span>
                    дизайн под ваши запросы
                </h2>

                <h3>
                    Занимаюсь веб дизайном на протяжении{' '}
                    <span style={{ color: '#4824ff' }}>9 лет</span>
                </h3>
            </div>
            <div className="main-image-box">
                <img
                    className="first-image-layer"
                    src="/images/1.jpg"
                    draggable="false"
                />
                <img
                    className="second-image-layer"
                    src="/images/2.png"
                    draggable="false"
                />
            </div>
        </div>
    );
}
