import React, { useState } from 'react';
import { Todo } from '../../types';
import { Draggable } from '@hello-pangea/dnd';
import './style.css';

type Props = {
  todo: Todo;
  handleDeleteTasks: (id: number) => void;
  handleUpdateStatus: (id: number) => void;
  index: number;
};

const TaskItem = ({
  handleDeleteTasks,
  handleUpdateStatus,
  todo: { id, desc, status },
  index
}: Props) => {
  const [checked, setChecked] = useState<boolean>(status);

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    handleUpdateStatus(id);
  };

  return (
    <>
      <Draggable draggableId={ `${ id }` } index={ index }>
        { ({ innerRef, draggableProps, dragHandleProps }) => (
          <article
            className="task-container"
            ref={ innerRef }
            { ...draggableProps }
            { ...dragHandleProps }
          >
            <p className={checked ? "checked" : ""}>{ desc }</p>
            <div className="task-container-panel">
              <input type="checkbox" checked={ checked } onChange={ handleChangeChecked } />
              <button onClick={() => handleDeleteTasks(id) }>❌</button>
            </div>
          </article>
        ) }
      </Draggable>      
    </>
  );
};

export default TaskItem;
