import React, { useEffect, useState } from "react";
import axios from "axios";
const Todos = () => {
      const [page, setPage] = useState(1);
      const [limit, setLimit] = useState(5);
      const [todos, setTodos] = useState([]);
      const [count, setCount] = useState(0);
      useEffect(() => {
            const getTodo = async () => {
                  let r = await axios.get(
                        `http://localhost:3000/todos?_page=${page}&_limit= ${limit}`
                  );
                  setTodos(r.data);
                  // console.log(page * 5);
                  // setCount(Number(r.headers["x -total -count"]));
                  setCount(Number(r.headers["x-total-count"]));
                  // setCount(+r.headers["x-total-count"]);
                  console.log(count);
            };
            getTodo();
      }, [page, limit]);
      return (
            <div className="App">
                  <button
                        disabled={page <= 1}
                        onClick={() => {
                              setPage(page - 1);
                        }}
                  >
                        {" -"}
                  </button>
                  <select onChange={(e) => Number(setLimit(e.target.value))}>
                        <option value="5">limit</option>
                        {/* <option value="5">5</option> */}
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={26}>25</option>
                  </select>
                  <button
                        disabled={count <= page * 5}
                        onClick={() => setPage(page + 1)}
                  >
                        {"+"}
                  </button>
                  {todos.map((todo) => (
                        <div key={todo.id}>{todo.value} </div>
                  ))}
            </div>
      );
};

export default Todos;
