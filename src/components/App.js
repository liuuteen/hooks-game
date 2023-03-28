import './App.css';
import UseStateGame from './reactHooksGame/UseStateGame';
import MenuNav from './menus/MenuNav';
import GameSkill from './gameSkill/GameSkill';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="game">
      <header id="game-header">
        <div className='game-title'>
          Hooks Game
        </div>
        <div className='game-flavour'>
          learn react hooks in a funny way
        </div>
      </header>
      <main id="game-body">
        <MenuNav />
        <div className='game-playroom'>
          <Routes>
            <Route path="/react-hooks/useState" element={<UseStateGame />} />
          </Routes>
        </div>
        <div className='game-skill'>
          <GameSkill />
        </div>
      </main>
    </div>
  );
}

export default App;
