import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    let width = 0, height = 0, drops = [], frame = 0, previous = 0;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/{}[]();=+-*";
    function draw() {
      context.fillStyle = "#07110bd0";
      context.fillRect(0, 0, width, height);
      context.font = "13px monospace";
      drops.forEach((drop, index) => {
        for (let trail = 0; trail < 18; trail++) {
          context.fillStyle = trail === 0 ? "#c7ffdb" : `rgba(63, 230, 121, ${(1 - trail / 18) * 0.55})`;
          context.fillText(characters[(index * 7 + trail * 3 + Math.floor(drop)) % characters.length], index * 19, (drop - trail) * 19);
        }
        drops[index] = drop * 19 > height + 350 ? -Math.random() * 20 : drop + 0.35;
      });
    }
    function resize() {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width; height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio; canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      drops = Array.from({ length: Math.ceil(width / 19) }, () => Math.random() * (height / 19 + 18));
      draw();
    }
    function animate(time) {
      if (time - previous > 65) { draw(); previous = time; }
      frame = requestAnimationFrame(animate);
    }
    function sync() {
      cancelAnimationFrame(frame);
      if (!document.hidden) frame = requestAnimationFrame(animate);
    }
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize(); sync();
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(frame); observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);
  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />;
}
