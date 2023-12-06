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

    const names = ["☃️", "🧊", "❄️", "🌈", "🌊"];
    const nameList = names.map((name) => (
        <div className="ScrollItem">
            <Emoji symbol={name} label="main" />
        </div>
    ));

    return (
        <>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "relative",
                }}
            >
                <Link
                    className="text-link"
                    to={"/"}
                    style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        zIndex: 99999,
                    }}
                >
                    <Emoji symbol="🌏️" label="main" />
                </Link>
                <div className="ScrollWrap">{nameList}</div>
            </div>
        </>
    );
}

export default Firework;
