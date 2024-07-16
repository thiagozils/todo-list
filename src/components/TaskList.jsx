/* eslint-disable react/prop-types */
import Task from "./Task"

const TaskList = ({tasks, onDeleteTask, onToggleTask}) => {
  return (
    <ul>
        { tasks.length > 0 ? 
        tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} onToggle={() => onToggleTask(task.id)}/>
        ))
        :
        (<p className="text-sm text-gray-500">Não existem tarefas adicionadas 😔</p>)
        }
    </ul>
  )
}

export default TaskList