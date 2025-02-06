import './PortfolioBlock.css';
export default function PortfolioBlock() {
    return (
        <div className="portfolio-block">
            <div className="first-block">
                <h1 className="main-title">Портфолио</h1>
                <div style={{ position: 'absolute', marginLeft: '-600px' }}>
                    <p className="gradient-part-one"></p>
                    <p className="title-border">Портф</p>
                </div>
                <div style={{ position: 'absolute', marginLeft: '620px' }}>
                    <p className="gradient-part-two"></p>
                    <p className="title-border">фолио</p>
                </div>
                <img
                    className="array-icon"
                    src="./icon/array.jpg"
                    draggable="false"
                />
            </div>
        </div>
    );
}
