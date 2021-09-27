import React from "react";

export function Lista(props) {
  const data = props.elementos.results;
  console.log(data);
  //const listItems = data.map((item) => <li key={item.id}>{item.name}</li>);

  // return <ul>{listItems}</ul>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
