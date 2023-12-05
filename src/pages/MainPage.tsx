import { Link } from "react-router-dom";

function App() {
    type Props = {
        symbol: string;
        label: string;
    };

    const Emoji = ({ symbol, label }: Props) => (
        <span
            className="emoji"
            role="img"
            aria-label={label ? label : ""}
            aria-hidden={label ? "false" : "true"}
        >
            {symbol}
        </span>
    );

    return (
        <>
            <div className="Whitespace">
                <div className="IconLink">
                    <Link className="TextLink" to={"/firework"}>
                        <Emoji symbol="🎇" label="firework" />
                    </Link>
                    <Link className="TextLink" to={"/scroll"}>
                        <Emoji symbol="🖱️" label="scroll" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default App;
