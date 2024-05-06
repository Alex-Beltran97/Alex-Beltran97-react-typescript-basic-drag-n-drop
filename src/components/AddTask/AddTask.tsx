import { useRef } from 'react';
import './style.css';

type Props = {
  handleAddTask: (desc: string) => void;
  [keyof: string]: any;
};

const AddTask = ({ handleAddTask, ...restProps }: Props) => {

  const formRef = useRef(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = (formRef.current as unknown) as HTMLFormElement;
    const formData = new FormData(form);
    const task = formData.get('task')?.toString() ?? ''; 
    
    handleAddTask(task);

    form.reset();
  };

  return <>
    <form
      className="form" { ...restProps }
      ref={ formRef }
      onSubmit={ handleSubmit }
    >
      <input className="form-input" type="text" name="task" placeholder="Add task here..." />
      <button className="form-input-button" type="submit">+</button>
    </form>
  </>;
};

export default AddTask;
