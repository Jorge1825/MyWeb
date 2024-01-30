import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Row, Col, Button } from "antd";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      key: "images",
      name: "Images",
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.6,
            size: 40,
          },
          push: {
            quantity: 2,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          enable: true,
          speed: 3,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        opacity: {
          value: 1,
        },
        rotate: {
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
          direction: "random",
          value: {
            min: 0,
            max: 360,
          },
        },
        shape: {
          options: {
            image: [
              {
                name: "azure",
              },
              {
                name: "dart",
              },
              {
                name: "css",
              },
              {
                name: "docker",
              },
              {
                name: "electron",
              },
              {
                name: "express",
              },
              {
                name: "figma",
              },
              {
                name: "firebase",
              },
              {
                name: "flutter",
              },
              {
                name: "github",
              },
              {
                name: "html",
              },
              {
                name: "jest",
              },
              {
                name: "js",
              },
              {
                name: "mongo",
              },
              {
                name: "nodejs",
              },
              {
                name: "playwright",
              },
              {
                name: "python",
              },
              {
                name: "react",
              },
              {
                name: "socket",
              },
              {
                name: "vue",
              },
            ],
          },
          type: "image",
        },
        size: {
          value: 16,
        },
      },
      background: {
        // color: "#fff",
      },
      preload: [
        {
          src: "/src/assets/images/azure.png",
          name: "azure",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/dart.png",
          name: "dart",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/css.png",
          name: "css",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/docker.png",
          name: "docker",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/Electron.png",
          name: "electron",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/express.png",
          name: "express",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/figma.png",
          name: "figma",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/firebase.png",
          name: "firebase",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/flutter.png",
          name: "flutter",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/github.png",
          name: "github",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/HTML5.png",
          name: "html",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/jest.png",
          name: "jest",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/js.png",
          name: "js",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/mongo.png",
          name: "mongo",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/nodejs.png",
          name: "nodejs",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/playwright.png",
          name: "playwright",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/Python.png",
          name: "python",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/React.png",
          name: "react",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/socket.png",
          name: "socket",
          width: 32,
          height: 32,
        },
        {
          src: "/src/assets/images/Vuejs.png",
          name: "vue",
          width: 32,
          height: 32,
        },
      ],
    }),
    []
  );

  if (init) {
    return (
      <div>
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Row className=" w-screen jus-center d-flex">
            <Col className=" jus-end d-flex items-center" span={6}>
              <img
                src="/src/assets/images/Logo.png"
                alt="404"
                className="circle"
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            </Col>
            <Col className="text-center jus-center " span={12}>
              <span className="title404">404</span>
              <br></br>
              <span className="body404">Page Not Found</span>

              <div className=" jus-center d-flex mt-2">
                <Button
                  className="btn-large jus-center d-flex items-center"
                  type="primary"
                  shape="round"
                >
                  <Link to="/dasboard/home">
                    <HomeIcon
                      style={{
                        fontSize: 26,
                        color: "#fff",
                        marginRight: 6,
                      }}
                    />
                    Volver Al Inicio
                  </Link>
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        ></Particles>
      </div>
    );
  }

  return <></>;
};
