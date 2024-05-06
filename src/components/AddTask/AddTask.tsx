import { useRef } from 'react';

type Props = {
  handleAddTask: (desc: string) => void;
  [keyof: string]: any;
};

const AddTask = ({ handleAddTask, ...restProps }: Props) => {
  const formRef = useRef(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = formRef.current as unknown as HTMLFormElement;
    const formData = new FormData(form);
    const task = formData.get('task')?.toString() ?? '';

    handleAddTask(task);

    form.reset();
  };

  return (
    <>
      <form
        className="mt-1 gap-1"
        {...restProps}
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input
          className="h-[2.8rem] w-[80%] p-[.5rem] border-2 border-gray-400 rounded bg-inherit"
          type="text"
          name="task"
          placeholder="Add task here..."
        />
        <button
          className="h-[2.8rem] w-[2.8rem] text-[3rem] flex items-center justify-center font-light cursor-pointer border-2 border-gray-400 rounded hover:bg-gray-600"
          type="submit"
        >
          +
        </button>
      </form>
    </>
  );
};

export default AddTask;
