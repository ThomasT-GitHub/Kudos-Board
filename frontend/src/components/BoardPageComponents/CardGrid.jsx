import Card from "./Card";
import "./BoardPageComponentStyles/CardGrid.css"

function CardGrid({ cardBelongingToBoard }) {
    return (
        <>
            <section className="CardGrid-view">
                {cardBelongingToBoard.map((card) => {
                    return <Card key={card.id} card={card}/>
                })}
            </section>
        </>
    );
}

export default CardGrid
