import { Link } from "react-router-dom";

function Firework() {
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
            <div
                className="backgroud firework-background"
                style={{ color: "white" }}
            >
                <Link className="text-link" to={"/"}>
                    <Emoji symbol="🌏️" label="main" />
                </Link>
            </div>
        </>
    );
}

export default Firework;
