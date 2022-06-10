import axios from "axios";
/*
Params: 
userId: 1, completed: false, _limit: 5, _page: 1
*/
function postToToDo(post) {
  // переделываю пост апи в ТуДу апи (добавляю рандомно поле комплитед)
  return { completed: !!Math.floor(Math.random() * 2), ...post };
}
async function setToDo(setterFunc) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    { params: { _limit: 3 } },
  );
  setterFunc(response.data.map(postToToDo));
}

export { setToDo };
