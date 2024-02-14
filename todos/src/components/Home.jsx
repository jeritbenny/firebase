import React, { useState } from "react";
import { FaEdit, FaEraser, FaTrash } from "react-icons/fa";
function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "" && descriptionValue.trim() !== "") {
      setTodos([
        ...todos,
        { text: inputValue.trim(), description: descriptionValue.trim() },
      ]);
      setInputValue("");
      setDescriptionValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditTodo = (index, newText, newDescription) => {
    const newTodos = [...todos];
    newTodos[index] = { text: newText, description: newDescription };
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="w-100 p-5 d-flex align-items-center justify-content-center">
          <div>
            <h1 className="h1 text-center">Todo </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, labore dignissimos aliquam, cupiditate molestias reiciendis molestiae ipsum sunt </p>
            <div className="d-flex align-items-center justify-content-center">
              <input
                type="text"
                className="border border-primary rounded p-2 mt-3 w-100"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a todo..."
              />
            </div>
            <div className="d-flex align-items-center justify-content-center ">
              <input
                type="text"
                className="border border-primary rounded p-2 mt-3 mb-3 w-100"
                value={descriptionValue}
                onChange={handleDescriptionChange}
                placeholder="Enter a description..."
              />
            </div>
            <button className="rounded px-3 text-white bg-primary" onClick={handleAddTodo}>Add Todo</button>
          </div>
        </div>
      </div>
  
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="w-100 p-5 ">
          <input
            type="text"
            className="border border-primary rounded p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search todos..."
          />
          <div className="w-auto overflow-y-scroll mt-5" style={{ maxHeight: '400px' }}>
            <ul className="mt-4">
              {filteredTodos.map((todo, index) => (
                <li key={index} className="m-4">
                  <span>
                    <div>
                      <strong>{todo.text}</strong>{" "}
                    </div>{" "}
                    {todo.description}
                  </span>
                  <span className="float-end">
                    <span 
                      className="me-3 "
                      onClick={() =>
                        handleEditTodo(
                          index,
                          prompt("Enter new value:", todo.text),
                          prompt("Enter new description:", todo.description)
                        )
                      }
                    >
                      <FaEdit className="text-primary"/>
                    </span>
                    <span onClick={() => handleDeleteTodo(index)}><FaTrash className="text-danger"/></span>
                  </span>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Home;
