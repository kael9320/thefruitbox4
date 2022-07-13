import NavBar from "./components/NavBar";
import NavFooter from "./components/NavFooter";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount";
import imgProduct from "./producto.jpg";
import "./App.css";

function App() {

  const onAdd = (quantity) => {
    if (quantity <= 0){
      alert(`No hay productos para agregar`);
    }else{
    alert(`Agregaste ${quantity} unidades al carrito`);
    }
  }

  return (
    <div className="App">
      <header id="header">
        <NavBar></NavBar>
      </header>
      <main>
            <section id="products">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 pb-3">
                            <h2><ItemListContainer greeting={"Bienvenidos a la tienda THE FRUIT!"} /></h2>
                        </div>
                        <div className="col-lg-4">
                          <div className="product">
                            <img src={imgProduct} />
                            <h3 className="mb-3">Nombre del Producto</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <ItemCount initial={0} stock={10} onAdd={onAdd} />
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer id="footer">
            <NavFooter></NavFooter>
        </footer>
    </div>
  );
}

export default App;
