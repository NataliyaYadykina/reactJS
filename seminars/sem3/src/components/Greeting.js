/*
Задание 1 (тайминг 15 минут)
Создайте функциональный компонент Greeting, который принимает проп name и отображает сообщение Привет, {name}!.
Используйте компонент Greeting в вашем основном компоненте App, передавая разные имена в качестве пропсов.
*/

const Greeting = ({ name }) => {
  return <h2>Task 1. Привет, {name}!</h2>;
};

export default Greeting;
