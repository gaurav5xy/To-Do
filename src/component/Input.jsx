import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handelAddTask = () => {
    dispatch(addTask(input));
    setInput("");
  };

  return (
    <div className="w-80 bg-zinc-800 p-5 flex justify-center items-center gap-5 mb-8 mx-auto">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 text-black w-full"
        placeholder="Enter task"
      />
      <button 
        onClick={handelAddTask} 
        className=" bg-customTeal text-white font-bold py-2 px-4"
      >
        Add
      </button>
    </div>
  );
};

export default Input;
