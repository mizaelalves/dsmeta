import {NotificationButton} from "./components/NotificationButton"
import {Header} from "./components/Header"
import {SalesCard} from "./components/SalesCard"
import "./App.css"

function App() {

  return (
    <div className="App">
     <Header/>
     <main>
        <section id="sales">
          <div className="container">
            <SalesCard />
          </div>
        </section>
     </main>
    </div>
  )
}

export default App
