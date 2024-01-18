// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import * as THREE from "three";

function Scroll() {
    // const scene = new THREE.Scene();

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
                <canvas></canvas>
            </div>
        </>
    );
}

export default Scroll;
