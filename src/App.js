import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  //option to remove Tour useing the id
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // this was to explane to the user that data is being fetched
  const fetchTours = async () => {
    setLoading(true);
    // if there is a network error
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // eslint-disable-next-line no-lone-blocks
  {
    /* if there are no more tours do this:*/
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours left</h2>
          <button className="btn" onClick={fetchTours}>refresh</button>
        </div>
      </main>
    );
  }
  return (
    <main>
      {/* used props for this */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
