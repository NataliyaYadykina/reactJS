// components/TaskForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../reducers/tasksSlice';

const TaskForm = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle.trim() === '') return;

        dispatch(addTask({ id: Date.now(), title: taskTitle }));
        setTaskTitle('');
    };

    return (
        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task title"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
