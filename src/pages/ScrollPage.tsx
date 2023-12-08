import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Scroll() {
    const [icons, setIcons] = useState(["☃️", "🧊", "❄️", "🌈", "🌊"]);
    const [scrollHeight, setScrollHeight] = useState(0);

    const nameList = icons.map((icon, index) => (
        <div className="ScrollItem" key={index}>
            <span role="icon" aria-label={index.toString()}>
                {icon}
            </span>
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
        axios.get("https://cataas.com/cat").then(function (response) {
            setIcons((prevIcons) => [...prevIcons, response.data]);
        });

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
                    <span role="icon" aria-label="main">
                        🌏️
                    </span>
                </Link>
                <div className="ScrollWrap">{nameList}</div>
            </div>
        </>
    );
}

export default Scroll;
