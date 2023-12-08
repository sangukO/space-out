import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <div className="Whitespace">
                <div className="IconLink">
                    <Link className="TextLink" to={"/firework"}>
                        <span role="icon" aria-label="firework">
                            🎇
                        </span>
                    </Link>
                    <Link className="TextLink" to={"/scroll"}>
                        <span role="icon" aria-label="scroll">
                            🖱️
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default App;
