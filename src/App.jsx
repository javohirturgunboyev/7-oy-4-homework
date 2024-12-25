import { Routes, Route, Link } from 'react-router-dom';
import TodoList from './pages/TodoList';
import DragDrop from './pages/DragDrop';
import CopyPaste from './pages/CopyPaste';
import PasteCopy from './pages/PasteCopy';

function App() {
  return (
    <div>
      <header className='bg-green-400 p-5 text-white flex justify-between'>

        <Link to="/">TodoList</Link>
        <Link to="/CopyPaste">CopyPaste</Link>
        <Link to="/DragDrop">DragDrop</Link>
        
        <Link to="/PasteCopy">PasteCopy</Link>
      </header>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/DragDrop" element={<DragDrop />} />
        <Route path="/CopyPaste" element={<CopyPaste />} />
        <Route path="/PasteCopy" element={<PasteCopy />} />
      </Routes>
    </div>
  );
}

export default App;
