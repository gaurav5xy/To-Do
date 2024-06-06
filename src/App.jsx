import './App.css';
import Input from './component/Input';
import List from './component/List';

function App() {
  return (
    <div className="bg-zinc-900 w-full h-screen text-white text-center p-10">
      <h1 className="text-4xl font-bold mb-8">To-Do</h1>
      <Input />
      <List />
    </div>
  );
}

export default App;
