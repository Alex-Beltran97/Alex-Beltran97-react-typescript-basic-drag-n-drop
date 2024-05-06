import AddTask from "../AddTask/AddTask";
import './style.css';

type Props = {
  handleAddTask: (desc: string) => void;
};

const HeaderComponent = ({ handleAddTask }: Props) => {
  return <>
    <header className="container">
      <h1 className="container-title">Todo App</h1>
      <AddTask
        className="container-add-task"
        handleAddTask={ handleAddTask }
      />
      <hr className="hr" />    
    </header>
  </>;
};

export default HeaderComponent;
