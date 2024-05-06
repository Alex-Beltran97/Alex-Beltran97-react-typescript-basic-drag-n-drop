import { useEffect, useState } from "react";
import { OnDragEnd, Todo } from "../types";

const initialState: Todo[] = JSON.parse(localStorage.getItem('todos')!) || [
  {id: 1, desc: 'Task 1', status: true},
  {id: 2, desc: 'Task 2', status: false},
  {id: 3, desc: 'Task 3', status: false},
];

export const useTask = () => {
  const [todos, setTodos] = useState<Todo[]>(initialState);

  const handleAddTask = (desc: string): void => {
    const todosCopy: Todo[] = [...todos];

    todosCopy.push({
      id: Date.now(),
      desc,
      status: false
    });

    setTodos(todosCopy);
  };

  const handleDeleteTasks = (id: number): void => {
    const todosCopy: Todo[] = [...todos];
    setTodos(todosCopy.filter((todo: Todo) => todo.id !== id));
  };

  const handleUpdateStatus = (id: number): void => {
    const todosCopy: Todo[] = [...todos];
    setTodos(todosCopy.map((todo: Todo)=>{
      if (todo.id !== id) return todo;
      return { ...todo, status: !todo.status };
    }))
  };

  const handleDragTasks = (e: OnDragEnd) => {
    if (!e.destination) return;
    const todosCopy = [...todos];
    const taskIndexOrigin = e.source.index;
    const taskIndexDestiny = e.destination.index;
    const [ taskDeleted ] = todosCopy.splice(taskIndexOrigin, 1);
    todosCopy.splice(taskIndexDestiny, 0, taskDeleted);
    setTodos(todosCopy);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    handleAddTask,
    handleDeleteTasks,
    handleUpdateStatus,
    handleDragTasks
  };
};