import CartWidget from "./CartWidget"

function NavBar(){
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>Tienda</li>
                <li>Remeras</li>
                <li>Zapatillas</li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar