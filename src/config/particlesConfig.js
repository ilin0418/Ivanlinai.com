
const particlesConfig = {
          background: {
            color: {
              value: '#000000',
            },
          },
          fpsLimit: 144,
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              mode:{
                repulse: {
                  distance: 200,
                  duration: 0.4,
                }
              }
            }
          },
          particles: {
            color: {
              value: "#4889b8",
            },
            links: {
              enable: true,
              width: 1,
              opacity: 1,
              distance: 150,
              color: '#CCCCFF',
              triangles: {
                enable: true,
                color: '#5D3FD3',
                opacity: 0.2,
              },
            },
            move: {
              enable: true,
              direction: 'none',
              outModes: 'bounce',
              random: true,
              speed: 4,
              straight: false
            },
            number: {
              value: 100,
              density: {
                enable: true,
                area: 1200
              },
            }
          },
          opacity: {
            value: 0.9,
          },
          shape: {
            type: 'hexagon'
          },
          size: {
            random: true,
            value: 5
          },
          detectRetina: true
        }

export default particlesConfig;