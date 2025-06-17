import UpvoteButton from './UpvoteButton'
import DeleteCardButton from './DeleteCardButton'
import './BoardPageComponentStyles/Card.css'

function Card({ card }) {
    return (
        <>
            <section className="Card-view">
                <h3 className="Card-title">{card.title}</h3>
                <p className="Card-message">{card.message}</p>
                <section className="Card-image-container">
                    <img className="Card-image" src={card.gif} alt={`${card.title} image`} />
                </section>
                <section className="Card-buttons">
                    <UpvoteButton />
                    <DeleteCardButton />
                </section>
            </section>
        </>
    );
}

export default Card
