/*
Задание 1 (тайминг 40 минут)
Для выполнения этого задания, вам потребуется создать логгирующее
middleware для Redux, которое будет выводить в консоль информацию о
действиях (actions) и состоянии (state) до и после выполнения каждого
действия. Это поможет в отладке и понимании потока данных в вашем
приложении.
● Сначала установите необходимые зависимости для вашего
проекта, используя npm install @reduxjs/toolkit react-redux. Затем
создайте middleware, которое принимает три аргумента: store,
next, и action. Ваше middleware должно выводить в консоль
текущее действие и состояние до его выполнения, вызывать
next(action) для передачи действия следуящему middleware или
редьюсеру, а затем выводить в консоль состояние после
выполнения действия.
● После создания middleware, подключите его к вашему Redux
store. Для этого используйте функцию configureStore из
@reduxjs/toolkit. В результате, каждое действие, отправленное
через store.dispatch, будет логгироваться вашим middleware
*/

import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Путь до Redux store
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
