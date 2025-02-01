
import './App.css'
import Start from './components/user/Start'


function App() {


  return (
    <>
      <div style={{
        height: "calc(100vh - 18px)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(src/assets/recipe.jpg)"
      }}>
        <Start />
      </div>

    </>
  )
}

export default App
