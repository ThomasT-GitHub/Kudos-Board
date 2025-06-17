import { boards, cards } from '../../../backend/data' // Simulates API fetch
import { useParams } from 'react-router'

function BoardPage() {
    const { id } = useParams();
    const board = boards[id];

    return (
        <>
            <h2>{board.title}</h2>
        </>
    )
}

export default BoardPage
