import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Certifications</h2>

      <section>
        <TestimonialCard
          name={"MICROSOFT AZ- 900"}
          feedback={"Completed the Microsoft az 900."}
        />

        <TestimonialCard
          name={"SALESFORCE DEVELOPER "}
          feedback={
            "In the salesforce completed training and modules ,challenges creating the classes and object."
          }
        />

        <TestimonialCard
          name={"ZENSAR TECHNOGIES"}
          feedback={"In this organization Completed Zensar Employment Skill Development (ESD) Program"
          }
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
