/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Task = ({task, onDelete, onToggle}) => {
  return (
    <li className='my-2'>
        <Card sx={{ minWidth: 350 }} className="align-middle">
            <CardContent className="flex justify-between">
                <p>{task.title}</p>
                <div className="flex justify-between">
                    <button onClick={() => onToggle(task.id)}>{task.done ? '✔️' : '❌'}</button>
                    <button onClick={onDelete}>🗑️</button>
                </div>
            </CardContent>
        </Card>
    </li>

  )
}

export default Task