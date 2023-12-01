import { useRef } from "react";
import { Link } from "react-router-dom";

interface CanvasProps {
    width: number;
    height: number;
}

function Firework({
    width = window.innerWidth - 50,
    height = window.innerHeight - 50,
}: CanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
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

    const draw = () => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.beginPath();
        context.moveTo(150, 150);
        context.arc(150, 150, 100, 0, (Math.PI / 180) * 90, true);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.strokeStyle = "blue";
        context.moveTo(150, 150);
        context.arc(150, 150, 100, 0, (Math.PI / 180) * 90, false);
        context.closePath();
        context.fill();
    };
    draw();
    return (
        <>
            <div
                className="backgroud firework-background"
                style={{ color: "white", justifyContent: "center" }}
            >
                <Link className="text-link" to={"/"}>
                    <Emoji symbol="🌏️" label="main" />
                </Link>
                <div>
                    <canvas
                        ref={canvasRef}
                        width={width}
                        height={height}
                        className="canvas"
                    />
                </div>
            </div>
        </>
    );
}

export default Firework;
