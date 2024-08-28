import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { completeTask } from '../redux/taskSlice';
import { IoIosStarOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import '../css/styles.css';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.items);
    const completeTask = useSelector((state) => state.tasks.completeItems);
    const dispatch = useDispatch();

    const handleDelete = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleTask = (task_id) => {

    }


    return (
        <ul>
            {tasks && tasks.map((task) => (
                <div key={task.id}>
                    <section className="task-list">
                        <div className="task-item">
                            <div onClick={() => handleTask(task.id)}><input type="checkbox" /></div>
                            <span>{task.text}</span>
                            <div className=' edit'>
                                <div><IoIosStarOutline /></div>
                                <div className=' md-delete' onClick={() => handleDelete(task.id)}><MdDelete /></div>
                            </div>
                        </div>
                    </section>
                </div>
            ))}
            <section className="completed-tasks">
                <h2>Completed</h2>
                <div className="task-item completed">
                    <input type="checkbox" checked />
                    <span>Read a book</span>
                    <i className="fas fa-star"></i>
                </div>
                <div className="task-item completed">
                    <input type="checkbox" checked />
                    <span>Clean the house</span>
                    <i className="fas fa-star"></i>
                </div>
                <div className="task-item completed">
                    <input type="checkbox" checked />
                    <span>Prepare presentation</span>
                    <i className="fas fa-star"></i>
                </div>
                <div className="task-item completed">
                    <input type="checkbox" checked />
                    <span>Update blog</span>
                    <i className="fas fa-star"></i>
                </div>
            </section>
        </ul>
    );
};

export default TaskList;
