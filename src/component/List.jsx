import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, addTask } from "../redux/taskSlice";

const List = () => {
  const taskItem = useSelector((store) => store.task.items);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleDeleteTask = (item) => {
    dispatch(removeTask(item));
  };

  const handleEditTask = (item, index) => {
    setEditMode(true);
    setEditedTask(item);
    setEditIndex(index);
  };

  const handleSaveEditedTask = () => {
    if (editedTask.trim() !== "") {
      dispatch(removeTask(taskItem[editIndex]));
      dispatch(addTask(editedTask));
      setEditMode(false);
      setEditedTask("");
      setEditIndex(null);
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedTask("");
    setEditIndex(null);
  };

  return (
    <div className="mx-auto w-80 bg-zinc-800 ">
      <ul>
        {taskItem.map((item, index) => (
          <li key={index} className="flex items-center justify-between my-4 bg-zinc-700 p-1">
            {editMode && editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="p-2 w-full mr-2 text-black"
                />
                <button 
                  onClick={handleSaveEditedTask} 
                  className=" bg-customTeal text-white font-bold py-1 px-2"
                >
                  Save
                </button>
                <button 
                  onClick={handleCancelEdit} 
                  className="bg-red-600 text-white font-bold py-1 px-2"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="flex-1">{item}</span>
                <button 
                  onClick={() => handleEditTask(item, index)} 
                  className="bg-customTeal  text-white font-bold py-1 px-2 ml-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteTask(item)} 
                  className="bg-red-600 text-white font-bold py-1 px-2 ml-2"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
