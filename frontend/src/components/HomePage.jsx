import { useState } from 'react'
import BoardCardGrid from './BoardCardGrid';

function HomePage() {
    const [boardSearchQuery, setBoardSearchQuery] = useState("");

    const handleBoardSearchChange = (event) => {
        setBoardSearchQuery(event.target.value);
    }

    const handleBoardSearchSubmit = () => {

    }

    const handleBoardSearchClear = () => {

    }

    // If 'Enter' is pressed, send search
    const handleBoardSearchEnter = (event) => {
        if (event.key === 'Enter') {
            handleBoardSearchSubmit();
        }
    }

    const BoardGridFilterOptions = {
        HOME: "Home",
        RECENT: "Recent",
        CELEBRATION: "Celebration",
        THANK_YOU: "Thank you",
        INSPIRATION: "Inspiration"
    };

    const handleBoardGridFilterChange = (event) => {
        const { value } = event.target;

        switch (value) {
            case BoardGridFilterOptions.HOME:

                break;
            case BoardGridFilterOptions.RECENT:

                break;
            case BoardGridFilterOptions.CELEBRATION:

                break;
            case BoardGridFilterOptions.THANK_YOU:

                break;
            case BoardGridFilterOptions.INSPIRATION:

                break;
        }
    }

    return (
        <>
            <header className="HomePage-Banner">
                <h1>KUDOBOARD</h1>

                <section className="HomePage-BoardGrid-Search">
                    <input type="text" value={boardSearchQuery} onChange={handleBoardSearchChange} onKeyUp={handleBoardSearchEnter} placeholder="Search" />
                    <button onClick={handleBoardSearchSubmit}>Submit</button>
                    <button onClick={handleBoardSearchClear}>Clear</button>
                </section>

                <select name="HomePage-BoardGrid-Filter" onChange={handleBoardGridFilterChange}>
                    <option value="">Filter</option>
                    <option value={BoardGridFilterOptions.HOME}>Home</option>
                    <option value={BoardGridFilterOptions.RECENT}>Recent</option>
                    <option value={BoardGridFilterOptions.THANK_YOU}>Thank you</option>
                    <option value={BoardGridFilterOptions.CELEBRATION}>Celebration</option>
                    <option value={BoardGridFilterOptions.INSPIRATION}>Inspiration</option>
                </select>
            </header>

            <section className="HomePage-Body">
                <BoardCardGrid boardCardList={[]} />
            </section>

            <footer className="HomePage-Footer">
                Thomas Trivino // Codepath 25
            </footer>
        </>
    )
}

export default HomePage
