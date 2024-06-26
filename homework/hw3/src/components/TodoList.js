/*
Задание 2: Список дел с Material UI

Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

Компоненты:
Используйте TextField для ввода новой задачи.
Добавьте Button для добавления задачи в список.
Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

Логика:
При нажатии на кнопку добавления, новая задача должна добавляться в список.
Рядом с каждой задачей должна быть кнопка для её удаления.
*/

import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, IconButton, List, ListItem, ListItemText, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Task 2</h2>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <TextField
            label="New Task"
            variant="outlined"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleAddTask}>
            Add Task
          </Button>
        </Grid>
      </Grid>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} component={Card} variant="outlined" style={{ marginTop: '10px' }}>
            <CardContent style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <ListItemText primary={task} />
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
