import React, { useEffect, useState } from "react";

import { URL, POPULARITY_URL } from "./api/BaseApi";
import { HeaderContainer } from "./App.Styled";
import Chart from "./components/Chart";

function App() {
  const [moviesData, setMoviesData] = useState([]);

  // const fetchMovies = async () => {
  //   try {
  //     // after this line, our function will wait for the `fetch()` call to be settled
  //     // the `fetch()` call will either return a Response or throw an error
  //     const response = await fetch(`${POPULARITY_URL}`);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error: ${response.status}`);
  //     }
  //     // after this line, our function will wait for the `response.json()` call to be settled
  //     // the `response.json()` call will either return the JSON object or throw an error
  //     const json = await response.json();
  //     console.log(json);
  //     setMoviesData(json);
  //   } catch (error) {
  //     console.error(`Could not get products: ${error}`);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, []);

  // console.log(moviesData);
  // console.log(moviesData.results);

  // const tableData = React.useMemo(() => moviesData.results, [moviesData]);

  return (
    <div>
      <HeaderContainer className='App'>Popularity </HeaderContainer>

      <div>
        {/* <Chart chartData={tableData} /> */}
        <Chart />
      </div>
      {/* {moviesData !== null || moviesData !== undefined ? (
        moviesData.results.map((data) => (
          <div>
            <Chart chartData={tableData} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
}

export default App;
