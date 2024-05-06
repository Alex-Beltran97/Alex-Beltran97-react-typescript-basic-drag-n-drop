import React, { useState } from 'react';
import { Todo } from '../../types';
import { Draggable } from '@hello-pangea/dnd';

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
  index,
}: Props) => {
  const [checked, setChecked] = useState<boolean>(status);

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    handleUpdateStatus(id);
  };

  return (
    <>
      <Draggable draggableId={`${id}`} index={index}>
        {({ innerRef, draggableProps, dragHandleProps }) => (
          <article
            className="p-2 border-solid border-2 border-gray-400 mb-3 text-[1.5rem] flex justify-between items-center rounded hover:bg-gray-600 active:bg-gray-600"
            ref={innerRef}
            {...draggableProps}
            {...dragHandleProps}
          >
            <p className={checked ? 'line-through' : ''}>{desc}</p>
            <div className="flex gap-2">
              <input
                className="w-[1.65rem] h-[1.65rem]"
                type="checkbox"
                checked={checked}
                onChange={handleChangeChecked}
              />
              <button
                className="w-[1.65rem] h-[1.65rem] border-none text-[1.5rem] cursor-pointer flex items-center justify-center bg-inherit"
                onClick={() => handleDeleteTasks(id)}
              >
                ❌
              </button>
            </div>
          </article>
        )}
      </Draggable>
    </>
  );
};

export default TaskItem;
