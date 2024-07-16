/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Plus } from "@phosphor-icons/react";

import {useState} from 'react'

const TaskInput = ({onAddTask}) => {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (input.trim()) {
            onAddTask(input);
            setInput('');
        }
    }


  return (
    <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Adicionar nova tarefa" variant="standard" value={input} onChange={(e) => setInput(e.target.value)}/>
        <Button variant="contained" type='submit'><Plus size={20} weight="bold" className='mr-1'/> Adicionar</Button>
    </form>
  )
}

export default TaskInput