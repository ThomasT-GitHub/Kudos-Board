import { boards, cards } from '../../../../backend/data' // Simulates API fetch
import { useParams } from 'react-router'
import CreateCardButton from './CreateCardButton';
import CardGrid from './CardGrid';

function BoardPage() {
    const { id } = useParams();
    const board = boards[id];

    return (
        <section className="BoardPage-view">
            <header className="BoardPage-banner">
                <h1>KUDOBOARD</h1>
                <h2>{board.title}</h2>
                <CreateCardButton />
            </header>

            <section className="BoardPage-body">
                <CardGrid />
            </section>

            <footer className="BoardPage-footer">
                Thomas Trivino // Codepath 25
            </footer>
        </section>
    );
}

export default BoardPage
