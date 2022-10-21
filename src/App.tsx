import { useState } from "react"
import reactLogo from "./assets/react.svg"
import { Button, Card, Title } from "./components"
import "./globalStyle.css"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vanilla-extract.style/" target="_blank">
          <img src="/vanilla-extract-alpha.png" className="logo" alt="vanilla-extract logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite-alpha.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src="/react-alpha.png" className="logo react" alt="React logo" />
        </a>
      </div>
      <Title><a href="https://www.salsitasoft.com" target="_blank">Salsita</a> ❤️ <a href="https://vanilla-extract.style/" target="_blank">Vanilla-Extract</a> + <a href="https://vitejs.dev" target="_blank">Vite</a> + <a href="https://reactjs.org" target="_blank">React</a></Title>
      <Card title="Hello from a Card">
        <Button onClick={() => setCount((count) => count + 1)} variant={ count % 2 === 0 ? 'primary' : 'secondary'}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
