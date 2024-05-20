import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import "animate.css";
import { motion } from "framer-motion";

import "./Banner.css";
import { EarthCanvas, StarsCanvas } from "../ui";
import { slideIn } from "../../utils/motion";

import data from "../../constants";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeletingName, setIsDeletingName] = useState(false);
  const [isDeletingDegree, setIsDeletingDegree] = useState(false);

  const [standByName, setStandByName] = useState(false);
  const [standByDegree, setStandByDegree] = useState(false);

  const [delta, setDelta] = useState(100);
  const period = 2000;

  const [studentName, setStudentName] = useState("");
  const [studentDegree, setStudentDegree] = useState("");



  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [studentName, studentDegree]);

  const tick = () => {
    let i = loopNum % data.length;
    let fullName = data[i].name;
    let fullDegree = data[i].degree;
    let updatedName = "";
    let updatedDegree = "";

    if (!standByName) {
      updatedName = isDeletingName
        ? fullName.substring(0, studentName.length - 1)
        : fullName.substring(0, studentName.length + 1);
    } else {
        updatedName = fullName;
    }

    if (!standByDegree) {
      updatedDegree = isDeletingDegree
        ? fullDegree.substring(0, studentDegree.length - 1)
        : fullDegree.substring(0, studentDegree.length + 1);
    } else {
        updatedDegree = fullDegree;
    }

    setStudentDegree(updatedDegree);
    setStudentName(updatedName);

    if (isDeletingName) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeletingName && updatedName == fullName) {
      setStandByName(true);
    } else if (isDeletingName && updatedName == "") {
      setDelta(100);
    }

    if (isDeletingDegree) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeletingDegree && updatedDegree == fullDegree) {
      setStandByDegree(true);
    } else if (isDeletingDegree && updatedDegree == "") {
      setDelta(100);
    }

    if (updatedDegree == fullDegree && updatedName == fullName) {
      setIsDeletingName(true);
      setIsDeletingDegree(true);
      setStandByDegree(false);
      setStandByName(false);
      setDelta(period);
    }

    if (updatedDegree == "" && updatedName == "") {
      setIsDeletingDegree(false);
      setIsDeletingName(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container
        className={`xl:mt-0 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Bienvenido a nuestro Muro</span>
                  <h1 className="xl:flex-1 xl:h-[350px] md:h-[550px] h-[350px]">
                    {`Hola, soy `}
                    <span className="wrap">{studentName}</span>
                  </h1>
                  <h3>
                    {`Estudiante de `}
                    <span className="wrap">{studentDegree}</span>
                  </h3>
                  <p>
                    Hago parte de un grupo de jóvenes investigadores con una
                    gran pasión por el aprendizaje, la innovación y la mejora de
                    mi región.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Lets connect <ArrowRightCircle size={25}></ArrowRightCircle>{" "}
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header" />
                                </div>}
                        </TrackVisibility> */}
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="xl:flex-1 xl:h-[400px] md:h-[550px] h-[350px]"
            >
              <EarthCanvas />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <StarsCanvas />
      <StarsCanvas />
    </section>
  );
};

export default Banner;
