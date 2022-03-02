import React, { useState } from 'react';

function App() {
  const [list, setList] = useState(['Shirley', 'Aline', 'Julio', 'Lorenzo'])

  function addToList() {
    setList(state => [...state, 'Novo']);
  }

  return (
    <>
      <button onClick={addToList}>Add</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
