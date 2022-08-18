import React from "react";
import Particles from "react-tsparticles";

import "../style.css";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        fpsLimit: 60,
        fullScreen: { enable: true },
        particles: {
          number: {
            value: 50,
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 400,
            random: {
              enable: true,
              minimumValue: 200,
            },
          },
          move: {
            enable: true,
            speed: 5,
            direction: "right",
            outModes: {
              default: "out",
              top: "destroy",
              bottom: "none",
            },
          },
        },
        style: {
          filter: "blur(50px)",
          // zIndex: "-100",
        },
        detectRetina: true,
        themes: [
          {
            name: "light",
            default: {
              value: true,
              mode: "light",
            },
            options: {
              background: {
                color: "#2e2e2b",
              },
              particles: {
                color: {
                  value: [
                    "#758211",
                    "#1f8aab",
                    "#000000",
                    "#090466",
                    "#400466",
                  ],
                },
              },
            },
          },
          {
            name: "dark",
            default: {
              value: true,
              mode: "dark",
            },
            options: {
              background: {
                color: "#080710",
              },
              particles: {
                color: {
                  value: [
                    "#004f74",
                    "#5f5800",
                    "#245100",
                    "#7d0000",
                    "#810c00",
                  ],
                },
              },
            },
          },
        ],
        emitters: {
          direction: "left",
          position: {
            x: 50,
            y: 150,
          },
          rate: {
            delay: 0.2,
            quantity: 2,
          },
          size: {
            width: 100,
            height: 0,
          },
        },
      }}
    />
  );
}

export default Particle;
