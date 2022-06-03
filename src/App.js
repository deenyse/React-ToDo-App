import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  console.log(likes);

  return (
    <div className="App">
      <h1>LikesCount is {likes}</h1>
      <button onClick={() => setLikes(likes + 1)}>increment</button>
      <button onClick={() => setLikes(likes - 1)}>decrement</button>
    </div>
  );
}

export default App;
