import blueprintLogo from './assets/blueprint.png'
import Form from './components/Form'
import Content from './components/Content'

function App() {
  return (
    <>
      <div className='logo'>
        <a href="https://sitblueprint.com" target="_blank">
          <img src={blueprintLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <Form></Form>
      <Content />
    </>
  )
}

export default App
