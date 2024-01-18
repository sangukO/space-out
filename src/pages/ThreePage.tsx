// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";

function Scroll() {
    // Scene 생성
    const scene = new THREE.Scene();
    // Camera 생성
    const camera = new THREE.PerspectiveCamera(
        75, // field of view
        window.innerWidth / window.innerHeight, // aspect ratio
        0.1, // near
        1000 // far
    );

    // Renderer 생성
    const renderer = new THREE.WebGLRenderer();
    // 렌더링할 곳 크기 설정
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Renderer 요소를 추가
    // renderer.domElement는 <canvas> 요소로, Renderer가 Scene을 나타내는 구역
    document.body.appendChild(renderer.domElement);

    // Geometry 생성
    const geometry = new THREE.BoxGeometry(
        1, // 가로
        1, // 세로
        1 // 높이
    );

    // Material 생성
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // 큐브 만들고 Scene에 추가
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Camera 위치 수정
    camera.position.z = 5;

    // 화면이 새로고침 될 때마다 렌더링
    function animate() {
        requestAnimationFrame(animate);

        // 큐브 회전시키기
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();

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
            </div>
        </>
    );
}

export default Scroll;
