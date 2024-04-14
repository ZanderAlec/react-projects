
export const WorkCard = ({ card }) => {
    
    return (
        <div className="work-container">
            <div className="card-icon"> 
                <img className="img" src={card.icon} alt=""/>
            </div>

            <h2 className="work-title">{card.title}</h2>
            <p className="work-text">{card.text}</p>
        </div>
    );
}