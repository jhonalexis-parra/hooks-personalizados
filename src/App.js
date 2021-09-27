import React from "react";
import { ToggleButton } from "./components/ToggleButton";
import { Lista } from "./components/Lista";
import { useFetch, statuses } from "./components/useFetch";
import "./styles.css";

const App = () => {
  const URL_API = "https://rickandmortyapi.com/api/character/";
  const { data, status } = useFetch(URL_API, {});

  const Component =
    status !== statuses.ERROR ? (
      <>
        {status === statuses.LOADING && <p>Loading...</p>}
        {data && <Lista elementos={data} />}
      </>
    ) : (
      <p> Network Error </p>
    );

  return (
    <>
      <ToggleButton />
      <ToggleButton />
      {Component}
    </>
  );
};

export default App;
