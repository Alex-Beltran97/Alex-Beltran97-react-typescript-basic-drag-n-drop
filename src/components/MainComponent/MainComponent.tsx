import { Todo } from '../../types';
import TaskItem from '../TaskItem/TaskItem';
import { Droppable } from '@hello-pangea/dnd';

type Props = {
  todos: Todo[];
  handleDeleteTasks: (id: number) => void;
  handleUpdateStatus: (id: number) => void;
};

const MainComponent = ({
  todos,
  handleUpdateStatus,
  handleDeleteTasks,
}: Props) => {
  return (
    <>
      <Droppable droppableId="todos">
        {({ innerRef, droppableProps, placeholder }) => (
          <main ref={innerRef} {...droppableProps}>
            {todos.map((todo: Todo, index) => (
              <TaskItem
                key={todo.id}
                index={index}
                todo={todo}
                handleDeleteTasks={handleDeleteTasks}
                handleUpdateStatus={handleUpdateStatus}
              />
            ))}
            {placeholder}
          </main>
        )}
      </Droppable>
    </>
  );
};

export default MainComponent;
