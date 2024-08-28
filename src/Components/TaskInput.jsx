import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import '../css/styles.css';

const TaskInput = () => {
    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setTaskText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskText.trim() !== '') {
            dispatch(addTask(taskText));
            setTaskText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="task-controls">
                <i className="fas fa-bell"></i>
                <i className="fas fa-calendar-alt"></i>
                <div className=' input-box'>
                    <textarea
                        type="text"
                        placeholder="Add A Task..."
                        value={taskText}
                        onChange={handleInputChange}
                        rows={6}
                        className=' taskText'
                    />
                    <div className=' add-task'><button type="submit" className="add-task-btn">ADD TASK</button></div>
                </div>
            </div>
        </form>
    );
};

export default TaskInput;
