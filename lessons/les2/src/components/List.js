import React, { useState } from 'react';

const List = () => {
  const [items, setItems] = useState([
    {id: "id1", text: 'Item 1', heading: "Heading 1"},
    {id: "id2", text: 'Item 2', heading: "Heading 2"},
    {id: "id3", text: 'Item 3', heading: "Heading 3"},
  ]);

  return items.map((item) => 
    <>
      <h2>{item.heading}</h2>
      <div key={item.id}>{item.text}</div>
      </>
      );
}

export default List;