import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompleteTasks, deleteTask, removeCompleteTask } from '../redux/taskSlice.js';
import { IoIosStarOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import '../css/styles.css';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.items);
    const completedTask = useSelector((state) => state.tasks.completeItems);
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const handleDelete = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleCompleteTask = (taskId) => {
        dispatch(addCompleteTasks(taskId));
    }

    const handleCompleteDelete = (taskId) => {
        dispatch(removeCompleteTask(taskId));
    }



    return (
        <ul>
            {tasks && tasks.map((task) => (
                <div key={task.id}>
                    <section className="task-list">
                        <div className="task-item">
                            <div><input ref={inputRef} type="checkbox" onChange={() => handleCompleteTask(task.id)} /></div>
                            <span>{task.text}</span>
                            <div className=' edit'>
                                <div><IoIosStarOutline /></div>
                                <div className=' md-delete' onClick={() => handleDelete(task.id)} ><MdDelete /></div>
                            </div>
                        </div>
                    </section>
                </div>
            ))}
            {completedTask && <section className="completed-tasks">
                <h2>Completed</h2>
                {completedTask && completedTask.map((task) => (<div className="task-item completed" key={task.id}>
                    <input ref={inputRef} type="checkbox" defaultChecked onClick={() => handleCompleteDelete(task.id)} />
                    <span>{task.text}</span>
                    <div className=' edit'>
                        <div><IoIosStarOutline /></div>
                    </div>
                </div>))}
            </section>}
        </ul>
    );
};

export default TaskList;
