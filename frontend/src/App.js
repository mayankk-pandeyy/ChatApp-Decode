import './App.css';
import bgImage from "../src/assets/bgImage.svg"
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Chat from './components/Chat';

function App() {
  return (
    <div className='w-[100vw] h-[100vh]' style={{backgroundImage:`url(${bgImage})`}}>
      <Route path="/" component={Home} exact/>
      <Route path="/chats" component={Chat} />
    </div>
  );
}

export default App;