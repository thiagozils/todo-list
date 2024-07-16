import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';

function App() {


  const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);


  const addTask = (task) => {
    // id, title, done
    setTasks([...tasks, {id: Date.now(), title: task, done: false}]);

    localStorage.setItem('tasks', JSON.stringify(tasks))

  }


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, done: !task.done} : task))
  }

  return (
    <>
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h2 className='text-3xl font-bold'>📋 To Do List</h2>
      <div className='my-4'>
      <TaskInput onAddTask={addTask}/>
      </div>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTask}/>
    </div>
    </>
  )
}

export default App
