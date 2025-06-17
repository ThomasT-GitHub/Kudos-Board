import Card from "./Card";

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
