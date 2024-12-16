import { useEffect, useRef, useState } from "react";
import { Engine, Render, World, Bodies, Runner, Events } from "matter-js";

const Loading = () => {
  const sceneRef = useRef(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [logoVisible, setLogoVisible] = useState(true);
  const [expandLogo, setExpandLogo] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  useEffect(() => {
    if (!sceneRef.current || windowSize.width === 0) return;

    const engine = Engine.create();
    const world = engine.world;

    const ballSize = windowSize.width < 768 ? 50 : 90;
    const logoBallSize = 90;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: windowSize.width,
        height: windowSize.height,
        background: "#f9f4e8",
        wireframes: false,
      },
    });

    const logoBall = Bodies.circle(
      windowSize.width / 2,
      windowSize.height / 2,
      logoBallSize,
      {
        isStatic: true,
        render: { fillStyle: "#1f1f1f" },
      }
    );

    const balls = Array.from({ length: 16 }).map((_, i) =>
      Bodies.circle(
        Math.random() * windowSize.width,
        (Math.random() * windowSize.height) / 4 - 200 - i * 100,
        ballSize,
        {
          restitution: 0.7,
          friction: 0.05,
          render: { fillStyle: "#1f1f1f" },
        }
      )
    );

    const ground = Bodies.rectangle(
      windowSize.width / 2,
      windowSize.height + 50,
      windowSize.width,
      100,
      {
        isStatic: true,
        render: { fillStyle: "#1f1f1f" },
      }
    );
    const leftWall = Bodies.rectangle(
      0, // Chap tomonda joylashgan
      windowSize.height / 2,
      10,
      windowSize.height,
      { isStatic: true }
    );

    const rightWall = Bodies.rectangle(
      windowSize.width, // O‘ng tomonda joylashgan
      windowSize.height / 2,
      10,
      windowSize.height,
      { isStatic: true }
    );

    World.add(world, [logoBall, ground, leftWall, rightWall, ...balls]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // To‘plarning tushishini kuzatish
    Events.on(engine, "afterUpdate", () => {
      const allBallsLanded = balls.every(
        (ball) => ball.position.y >= windowSize.height - 100
      );
      setTimeout(() => {
        setExpandLogo(true);
      }, 4000);
    });

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      World.clear(world, false);
      render.canvas.remove();
      render.textures = {};
    };
  }, [sceneRef, windowSize, expandLogo]);

  return (
    <div
      className="relative w-full h-full flex justify-center items-center"
      ref={sceneRef}
      style={{ overflow: "hidden" }}
    >
      {logoVisible && (
        <div
          style={{
            position: "absolute",
            top: windowSize.height / 2 - 12,
            left: windowSize.width / 2 - 50,
            color: "white",
            fontSize: windowSize.width < 768 ? "18px" : "24px",
            fontWeight: "bold",
            textAlign: "center",
            opacity: expandLogo ? 0 : 1,
            transition: "opacity 2s ease",
          }}
        >
          ApexLogo
        </div>
      )}
      {expandLogo && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#1f1f1f",
            borderRadius: "50%",
            transform: "scale(50)", // Katta o‘lcham
            transition: "transform 2s ease, opacity 1.5s ease",
          }}
        />
      )}
    </div>
  );
};

export default Loading;
