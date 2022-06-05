import axios from "axios";
/*
Params: 
userId: 1, completed: false, _limit: 5, _page: 1
*/

async function setToDo(setterFunc) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    { params: { _limit: 10 } },
  );
  setterFunc(response.data);
}

export { setToDo };
