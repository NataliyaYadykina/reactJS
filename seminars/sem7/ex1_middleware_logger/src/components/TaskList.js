// components/TaskList.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../reducers/tasksSlice';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();

    const handleRemoveTask = (taskId) => {
        dispatch(removeTask(taskId));
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                        <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
