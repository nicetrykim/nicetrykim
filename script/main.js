html {
  box-sizing: border-box;
}

body {
  font-family: "Work Sans", sans-serif;
  margin: 0;
}

.song {
  visibility: hidden;
}

.container {
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  text-align: center;
  visibility: hidden;
  width: 100vw;
}

.container > div {
  left: 0;
  position: absolute;
  right: 0;
  top: 20vh;
}

.one {
  font-size: 4.5rem;
}

.two {
  font-size: 1.2rem;
  font-weight: lighter;
}

.three {
  font-size: 3rem;
}

.four .text-box {
  border: 3px solid #aaa;
  border-radius: 5px;
  margin: 0 auto;
  padding: 10px;
  position: relative;
  width: 600px;
}

.text-box p {
  margin: 0;
  text-align: left;
}

.text-box span {
  visibility: hidden;
}

.text-box .fake-btn {
  background-color: rgb(21, 161, 237);
  border-radius: 3px;
  bottom: -50px;
  color: #fff;
  padding: .5rem 1rem;
  position: absolute;
  right: 5px;
}

.five p {
  font-size: 2rem;
  left: 0;
  position: absolute;
  right: 0;
}

.idea-3 strong {
  border-radius: 3px;
  display: inline-block;
  padding: 3px 5px;
}

.five .idea-5 {
  font-size: 4rem;
}

.idea-5 span, .idea-6 span, .wish-hbd span {
  display: inline-block;
}

.idea-6 span{
  font-size: 15rem;
}

.six {
  position: relative;
  top: 10vh;
  z-index: 1;
}

.six img {
  display: inline-block;
  height: 350px;
  max-width: 100%;
  /* height: auto; */
}

.six .hat {
  left: 41.5%;
  position: absolute;
  /* transform: scale(0.1); */
  top: -35%;
  width: 80px;
}

.baloons img {
  display: inline-block;
  position: absolute;
}

.baloons img:nth-child(even) {
  left: -10%;
}

.baloons img:nth-child(odd) {
  right: -10%;
}

.baloons img:nth-child(3n + 0) {
  left: 30%;
}

.seven, .eight {
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100vw;
}

.eight svg {
  left: 0;
  position: absolute;
  top: 0;
  visibility: hidden;
  width: 25px;
  z-index: -1;
}

.eight svg:nth-child(1) {
  fill: #bd6ecf;
  left: 5vw;
  top: 7vh;
}

.eight svg:nth-child(2) {
  fill: #7dd175;
  left: 35vw;
  top: 23vh;
}

.eight svg:nth-child(3) {
  fill: #349d8b;
  left: 23vw;
  top: 33vh;
}

.eight svg:nth-child(4) {
  fill: #347a9d;
  left: 57vw;
  top: 43vh;
}

.eight svg:nth-child(5) {
  fill: #c66053;
  left: 7vw;
  top: 68vh;
}

.eight svg:nth-child(6) {
  fill: #bfaa40;
  left: 77vw;
  top: 42vh;
}

.eight svg:nth-child(7) {
  fill: #e3bae8;
  left: 83vw;
  top: 68vh;
}

.eight svg:nth-child(8) {
  fill: #8762cb;
  left: 37vw;
  top: 86vh;
}

.eight svg:nth-child(9) {
  fill: #9a90da;
  left: 87vw;
  top: 94vh;
}

.wish-hbd {
  font-size: 3em;
  margin: 0;
  text-transform: uppercase;
}

.wish h5 {
  font-size: 2rem;
  font-weight: lighter;
  margin: 10px 0 0;
}

.nine p {
  font-size: 2rem;
  font-weight: lighter;
}

#replay {
  cursor: pointer;
  z-index: 3;
}

/* Media Queries */
@media screen and (max-height: 1000px) {
  .six .hat {
    left: 40%;
  }
}

@media screen and (max-height: 800px) {
  .six .hat {
    left: 37%;
  }
}

@media screen and (max-height: 700px) {
  .six .hat {
    left: 32%;
  }
}

@media screen and (max-height: 850px) and (max-width: 450px) {
  .six .hat {
    left: 32%;
  }
}

@media screen and (max-width: 500px) {
  .container {
    width: 90%;
  }

  .four .text-box {
    width: 90%;
  }

  .text-box .fake-btn {
    bottom: -38px;
    right: 5px;
  }

  .idea-5 span {
    display: block;
  }

  .idea-6 span {
    font-size: 10rem;
  }

  .six .hat {
    /* top: -20px; */
    width: 50px;
  }

  .wish-hbd {
    font-size: 2.2em;
  }

  .wish h5 {
    font-size: 1.4rem;
  }

  .nine p {
    font-size: 1.5rem;
    font-weight: lighter;
  }
}
 // trigger to play music in the background with sweetalert
  window.addEventListener('load', () => {
    Swal.fire({
      title: 'Do you want to play music in the background?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        document.querySelector('.song').play();
        resolveFetch().then(animationTimeline());
      } else {
        resolveFetch().then(animationTimeline());
      }
    });
  });


  // animation timeline
  const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
      .split("")
      .join("</span><span>")}</span`;

    hbd.innerHTML = `<span>${hbd.innerHTML
      .split("")
      .join("</span><span>")}</span`;

    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg"
    }

    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
      visibility: "visible"
    })
      .from(".one", 0.7, {
        opacity: 0,
        y: 10
      })
      .from(".two", 0.4, {
        opacity: 0,
        y: 10
      })
      .to(".one",
        0.7,
        {
          opacity: 0,
          y: 10
        },
      "+=3.5")
      .to(".two",
        0.7,
        {
          opacity: 0,
          y: 10
        },
      "-=1")
      .from(".three", 0.7, {
        opacity: 0,
        y: 10
      })
      .to(".three",
        0.7,
        {
          opacity: 0,
          y: 10
        },
      "+=3")
      .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
      })
      .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
      })
      .staggerTo(
        ".hbd-chatbox span",
        1.5, {
          visibility: "visible",
        },
        0.05
      )
      .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
      },
      "+=4")
      .to(
        ".four",
        0.5, {
          scale: 0.2,
          opacity: 0,
          y: -150
        },
      "+=1")
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-3", 0.7, ideaTextTrans)
      .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
      })
      .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-4", 0.7, ideaTextTrans)
      .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
      .from(
        ".idea-5",
        0.7, {
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0,
        },
        "+=1.5"
      )
      .to(
        ".idea-5 span",
        0.7, {
          rotation: 90,
          x: 8,
        },
        "+=1.4"
      )
      .to(
        ".idea-5",
        0.7, {
          scale: 0.2,
          opacity: 0,
        },
        "+=2"
      )
      .staggerFrom(
        ".idea-6 span",
        0.8, {
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: Expo.easeOut,
        },
        0.2
      )
      .staggerTo(
        ".idea-6 span",
        0.8, {
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
      )
      .staggerFromTo(
        ".baloons img",
        2.5, {
          opacity: 0.9,
          y: 1400,
        }, {
          opacity: 1,
          y: -1000,
        },
        0.2
      )
      .from(
        ".profile-picture",
        0.5, {
          scale: 3.5,
          opacity: 0,
          x: 25,
          y: -25,
          rotationZ: -45,
        },
        "-=2"
      )
      .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
      })
      .staggerFrom(
        ".wish-hbd span",
        0.7, {
          opacity: 0,
          y: -50,
          // scale: 0.3,
          rotation: 150,
          skewX: "30deg",
          ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
      )
      .staggerFromTo(
        ".wish-hbd span",
        0.7, {
          scale: 1.4,
          rotationY: 150,
        }, {
          scale: 1,
          rotationY: 0,
          color: "#ff69b4",
          ease: Expo.easeOut,
        },
        0.1,
        "party"
      )
      .from(
        ".wish h5",
        0.5, {
          opacity: 0,
          y: 10,
          skewX: "-15deg",
        },
        "party"
      )
      .staggerTo(
        ".eight svg",
        1.5, {
          visibility: "visible",
          opacity: 0,
          scale: 80,
          repeat: 3,
          repeatDelay: 1.4,
        },
        0.3
      )
      .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
      })
      .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
      .to(
        ".last-smile",
        0.5, {
          rotation: 90,
        },
        "+=1"
      );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
      tl.restart();
    });
  }

  // Import the data to customize and insert them into page
  const fetchData = () => {
    fetch("customize.json")
      .then(data => data.json())
      .then(data => {
        Object.keys(data).map(customData => {
          if (data[customData] !== "") {
            if (customData === "imagePath") {
              document
                .getElementById(customData)
                .setAttribute("src", data[customData]);
            } else {
              document.getElementById(customData).innerText = data[customData];
            }
          }
        });
      });
  };

  // Run fetch and animation in sequence
  const resolveFetch = () => {
    return new Promise((resolve, reject) => {
      fetchData();
      resolve("Fetch done!");
    });
  };