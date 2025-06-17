import { boards, cards } from '../../../backend/data' // Simulates API fetch
import { useParams } from 'react-router'

function BoardPage() {
    const { id } = useParams();

    return (
        <>
            <p>{id}</p>
        </>
    )
}

export default BoardPage
