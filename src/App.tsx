import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainComponent/MainComponent";
import { useTask } from "./hooks";
import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd';

const App = () => {

  const {
    todos,
    handleAddTask,
    handleDeleteTasks,
    handleUpdateStatus,
    handleDragTasks
  } = useTask();

  return <>
    <DragDropContext onDragEnd={ handleDragTasks as OnDragEndResponder } >
      <HeaderComponent
        handleAddTask={ handleAddTask }
      />
      <MainComponent
        todos={ todos }
        handleDeleteTasks={ handleDeleteTasks }
        handleUpdateStatus={ handleUpdateStatus }
      />
    </DragDropContext>
  </>;
};

export default App;
