import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>Ülesanded</h1>
      <Todo text='Osta piima' />
      <Todo text='Keeda piima'/>
      <Todo text='Joo piima'/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
