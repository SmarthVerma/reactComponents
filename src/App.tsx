
import './App.css'
import RandomTextEffect from './components/RandomStringEffect'

function App() {
  const bigString = 'dnasodngsndkfn iuehriu3qwh iuauhdisaud'
  return (
    <>
      <RandomTextEffect size={12} duration={3} defaultStr={bigString} className='text-sm' />
    </>
  );
}

export default App
