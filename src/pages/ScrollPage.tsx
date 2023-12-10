import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Scroll() {
    const [icons, setIcons] = useState([""]);
    const [scrollHeight, setScrollHeight] = useState(0);

    const nameList = icons.map((icon, index) => (
        <div className="ScrollItem" key={index}>
            <img src={icon} style={{ width: "100%", height: "100%" }}></img>
        </div>
    ));

    function updateScroll() {
        setScrollHeight(window.scrollY);
    }

    async function fetchFirstData() {
        const response = await axios.get("https://cataas.com/cat", {
            responseType: "arraybuffer", // 바이너리 데이터로 받기 위해 responseType 설정
        });
        const base64Data = btoa(
            new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
            )
        );
        setIcons([`data:image/jpeg;base64,${base64Data}`]);
    }

    async function fetchData() {
        const response = await axios.get("https://cataas.com/cat", {
            responseType: "arraybuffer", // 바이너리 데이터로 받기 위해 responseType 설정
        });
        const base64Data = btoa(
            new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
            )
        );
        setIcons((prevIcons) => [
            ...prevIcons,
            `data:image/jpeg;base64,${base64Data}`,
        ]);
    }

    useEffect(() => {
        fetchFirstData();
        fetchData();
        fetchData();
        fetchData();
        window.addEventListener("scroll", function () {
            updateScroll();
        });
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollHeight === document.body.scrollHeight - window.innerHeight) {
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
