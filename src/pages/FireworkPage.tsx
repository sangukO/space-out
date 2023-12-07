import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fireworks } from "fireworks-js";

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

    useEffect(() => {
        const options = {
            rocketsPoint: {
                min: 50,
                max: 50,
            },
            intensity: 8,
            speed: 1,
            autoresize: true,
            acceleration: 1.0,
            traceSpeed: 6,
            delay: {
                min: 100,
                max: 100,
            },
            decay: {
                min: 0.01,
                max: 0.05,
            },
            flickering: 0.0,
            particles: 150,
            opacity: 1.0,
        };

        const fireworks = new Fireworks(
            document.querySelector(".Firework")!,
            options
        );
        fireworks.start();
    }, []);

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
                    className="TextLink"
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
                <div className="FireworkWrap">
                    <div className="Firework"></div>
                </div>
            </div>
        </>
    );
}

export default Firework;
