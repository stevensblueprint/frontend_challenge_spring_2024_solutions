import blueprintLogo from './assets/blueprint.png'
import './App.css'

function App() {
  return (
    <>
      <div className='logo'>
        <a href="https://sitblueprint.com" target="_blank">
          <img src={blueprintLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Blueprint Frontend Assessment S2024</h1>
      <p className="">
        View the designs
      </p>
    </>
  )
}

export default App
