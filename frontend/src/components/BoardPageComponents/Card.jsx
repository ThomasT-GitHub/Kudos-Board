import UpvoteButton from './UpvoteButton'
import DeleteCardButton from './DeleteCardButton'

function Card({ card }) {
    return (
        <>
            <section className="Card-view">
                <h3>{card.title}</h3>
                <p>{card.message}</p>
                <img src={card.gif} alt="" />
            </section>

            <section className="Card-buttons">
                <UpvoteButton />
                <DeleteCardButton />
            </section>
        </>
    );
}

export default Card
