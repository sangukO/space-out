import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Scroll() {
    const [icons, setIcons] = useState([
        { id: "", url: "", width: Number, height: Number },
    ]);
    const [scrollHeight, setScrollHeight] = useState(0);

    const nameList = icons.map((icon, index) => (
        <div className="ScrollItem" key={index}>
            <img src={icon.url} style={{ width: "100%", height: "100%" }}></img>
        </div>
    ));

    function updateScroll() {
        setScrollHeight(window.scrollY);
    }

    async function fetchFirstData() {
        const response = await axios.get(
            "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        const { data } = response;
        setIcons(data);
    }

    async function fetchData() {
        const response = await axios.get(
            "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        const { data } = response;
        for (let i = 0; i < data.length; i++) {
            setIcons((prevIcons) => [...prevIcons, data[i]]);
        }
    }

    useEffect(() => {
        fetchFirstData();
        window.addEventListener("scroll", function () {
            updateScroll();
        });
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollHeight === document.body.scrollHeight - window.innerHeight) {
            console.log(icons);
            fetchData();
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
                <div className="ScrollTitle">
                    <span>Infinite Cats</span>
                </div>
                <div className="ScrollWrap">{nameList}</div>
            </div>
        </>
    );
}

export default Scroll;
