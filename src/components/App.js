import './App.css';
import UseStateGame from './react-hooks-game/UseStateGame';
import MenuLvOne from './menus/MenuLvOne';

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
        <div className='game-nav'>
          <MenuLvOne lv1Title={"react hooks"} />
          <MenuLvOne lv1Title={"react-router hooks"} />
        </div>
        <div className='game-playroom'>
          <UseStateGame />
        </div>
        <div className='game-skill'>
          rightside
        </div>
      </main>
    </div>
  );
}

export default App;
