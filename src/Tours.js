import React from "react";
import Tour from "./Tour";
const Tours = ({ tours,removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>
          our tours
          <div className="underline"></div>
        </h2>
      </div>
      <div>
        {/* I used the spread operator to obtain the whole of the data */}
        {tours.map((tour) => {

          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
