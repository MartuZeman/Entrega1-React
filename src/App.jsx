import './App.css'
import Item from './components/item'
import StateHook from './components/StateHook'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'

function App() {  
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting = "Hola mundo"/>
      <div>      
      <h1>Hola mundo</h1>    
      <h2>Hola Coderhouse</h2>
      <hr />
      <h2>Componente de estado</h2>
      <StateHook/>

      <Item 
      title = "Zapatillas Rojas" 
      price ={ 1000 }
      imgURL = "https://static8.depositphotos.com/1073974/947/i/450/depositphotos_9473512-stock-photo-vintage-red-shoes.jpg"/>
      <Item 
      title = "Zapatillas Verdes" 
      price ={ 2000 }
      imgURL = "https://www.indy.com.ar/cdn/shop/files/868147-800-auto-Photoroom_copia-Photoroom.jpg?v=1739800759&width=1426"/>
      <Item 
      title = "Zapatillas Azules" 
      price ={ 3000 }
      imgURL = "https://production.cdn.vaypol.com/variants/jx4e1s41dk6hism1chdtt7e1ge8k/e82c8d6171dd25bb538f2e7263b5bc7dfc6a79352d85923074be76df53fbc6f4"/>
    </div>
    </>
  )
}

export default App