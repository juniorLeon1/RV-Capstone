import React from "react";
import Card from "react-bootstrap/Card";
import Travel from "../../images/travel.png";
import Luggage from "../../images/luggage.png";
import Sun from "../../images/sunrise.png";
import Ticket from "../../images/ticket.png";
import "../../styles/Experience.css";
import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
  hidden: { opacity: 0, scale: 0 },
};

export default function Experience() {
  // const control = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, inView]);

  return (
    <div className="Experience">
      <div className="expText">
        <h2>Experience sustainable travel</h2>
        <div className="marginsneeded">
        <p>
          The negative enviornmental impacts of tourism are substatial. They include the depletion of local natural resources as well as pollution and waste problems. Trourism often puts pressure on natural resourcs through over-consumption, often in places where resources are already scarce.
        </p>
        </div>
      </div>
      <div className="expContainer">
      {/* <motion.div
      ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        > */}
          <Card className="expCard">
            <Card.Body>
              <img
                className="expImg"
                src={Travel}
                alt="plane going around the earth"
              />
              <Card.Title>Sustainability</Card.Title>
              <br />
              <Card.Text>
              We value enviornmental sustainability and aim to minimize our impact on the enviornment by being a resource for those who wish to see the world.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* </motion.div> */}
        

        {/* <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        > */}
        <Card className="expCard">
          <Card.Body>
            <img className="expImg" src={Luggage} alt="lugge icon" />
            <Card.Title>Cultural Perservation</Card.Title>
            <br />
            <Card.Text>
              Our goal is to promote the values and preservation of the traditons and cultures of the communities we operate in. We belive in supporting and respecting the local communities we work with.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* </motion.div> */}

        {/* <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        > */}
        <Card className="expCard">
          <Card.Body>
            <img className="expImg" src={Sun} alt="sunrise on the beach" />
            <Card.Title>Education</Card.Title>
            <br />
            <Card.Text>
             We aim to support the education and awareness of each user and the cultural enviornments they are visiting. This includes providing guides that highlight sustainability.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* </motion.div> */}

        {/* <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        > */}
        <Card className="expCard">
          <Card.Body>
            <img className="expImg" src={Ticket} alt="tickets" />
            <Card.Title>Community Involvement</Card.Title>
            <br />
            <Card.Text>
              We Value community envolvment and aim to engage in the local communities we serve. This includes collaborating with local organizations and supporting loval initiatives.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* </motion.div> */}
      </div>
    </div>
  );
}
