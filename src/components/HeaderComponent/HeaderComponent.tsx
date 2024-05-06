import AddTask from '../AddTask/AddTask';

type Props = {
  handleAddTask: (desc: string) => void;
};

const HeaderComponent = ({ handleAddTask }: Props) => {
  return (
    <>
      <header className="py-4">
        <h1 className="text-center text-3xl">Todo App</h1>
        <AddTask
          className="mt-4 flex gap-1 justify-center"
          handleAddTask={handleAddTask}
        />
        <hr className="mt-4" />
      </header>
    </>
  );
};

export default HeaderComponent;
