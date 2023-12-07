import { useEffect, useState } from "react";
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

    const [icons, setIcons] = useState(["☃️", "🧊", "❄️", "🌈", "🌊"]);
    const [scrollHeight, setScrollHeight] = useState(0);

    const nameList = icons.map((icon, index) => (
        <div className="ScrollItem" key={index}>
            <Emoji symbol={icon} label="main" />
        </div>
    ));

    function updateScroll() {
        setScrollHeight(window.scrollY);
    }

    function addIcons() {
        const newIcon = "🎄";
        setIcons((prevIcons) => [...prevIcons, newIcon]);
    }

    useEffect(() => {
        window.addEventListener("scroll", function () {
            updateScroll();
        });
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollHeight === document.body.scrollHeight - window.innerHeight) {
            addIcons();
        }
    }, [scrollHeight]);

    return (
        <>
            <div
                style={{
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
                <div className="ScrollWrap">{nameList}</div>
            </div>
        </>
    );
}

export default Firework;
