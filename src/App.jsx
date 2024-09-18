import blueprintLogo from './assets/blueprint.png'
import Form from './components/Form'
import './App.css'

function App() {
  return (
    <>
      <div className='logo'>
        <a href="https://sitblueprint.com" target="_blank">
          <img src={blueprintLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <Form></Form>
    </>
  )
}

export default App
