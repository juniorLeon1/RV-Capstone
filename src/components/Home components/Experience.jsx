import React from "react";
import Card from "react-bootstrap/Card";
import Travel from "../../images/travel.png";
import Luggage from "../../images/luggage.png";
import Sun from "../../images/sunrise.png";
import Ticket from "../../images/ticket.png";
import "../../styles/Experience.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
  hidden: { opacity: 0, scale: 0 },
};

export default function Experience() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="Experience">
      <div className="expText">
        <h2>Experience sustainable travel</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          molestias placeat exercitationem, est quibusdam iusto excepturi
          voluptas ullam nulla, quidem aut error sapiente consequatur aliquam
          cum! Voluptates quisquam iure velit!
        </p>
      </div>
      <div className="expContainer">
      <motion.div
      ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <Card className="expCard">
            <Card.Body>
              <img
                className="expImg"
                src={Travel}
                alt="plane going around the earth"
              />
              <Card.Title>Card Title</Card.Title>
              <br />
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </motion.div>
        

        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
        <Card className="expCard">
          <Card.Body>
            <img className="expImg" src={Luggage} alt="lugge icon" />
            <Card.Title>Card Title</Card.Title>
            <br />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </motion.div>

        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
        <Card className="expCard">
          <Card.Body>
            <img className="expImg" src={Sun} alt="sunrise on the beach" />
            <Card.Title>Card Title</Card.Title>
            <br />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </motion.div>

        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
        <Card className="expCard">
          <Card.Body>
            <img className="expImg" src={Ticket} alt="tickets" />
            <Card.Title>Card Title</Card.Title>
            <br />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </motion.div>
      </div>
    </div>
  );
}
