import BoardCard from './BoardCard'
import './BoardCardGrid.css'

const BoardCardGrid = ({ boardCardList }) => {

    return (
        <>
            <section className="BoardCardGrid-view">
                {boardCardList.map((boardCard) => {
                    return <BoardCard key={boardCard.id} boardCard={boardCard}/>
                })}
            </section>
        </>
    )
}

export default BoardCardGrid
