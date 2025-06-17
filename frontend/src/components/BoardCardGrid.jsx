import BoardCard from './BoardCard'
import './BoardCardGrid.css'

const BoardCardGrid = ({ boardCardList }) => {

    return (
        <>
            <section className="BoardCardGrid-view">
                {boardCardList.map((board, index) => {
                    return <></>
                })}
            </section>
        </>
    )
}

export default BoardCardGrid
