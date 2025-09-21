import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {  


  return (
    <>
     <BrowserRouter>
      
      <main>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<ItemListContainer greeting = "Nuestros Productos"/>}/>
        <Route path="/category/:catParam" element = {<ItemListContainer greeting = "Categoria"/>}/>
        <Route path="/detail/:idParam" element = {<ItemDetailContainer/>}/>
        <Route path='*' element = {<p>Oops! No encontramos la pagina</p>}/>
      </Routes>
      </main>
      </BrowserRouter>
    </>

  )
}

export default App