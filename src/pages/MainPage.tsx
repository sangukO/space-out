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
            <div className="firework-link">
                <Link className="text-link" to={"/firework"}>
                    <Emoji symbol="🎇" label="firework" />
                </Link>
            </div>
        </>
    );
}

export default App;
