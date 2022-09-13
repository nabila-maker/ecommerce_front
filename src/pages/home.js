import Navigation from '../components/Navigation'
import Footer from "../components/Footer";
import Product from "../components/Product"
import "../styles/components/product.scss"


function Home() {
return (
    <div className ="Home">
        
          <Navigation/>
       <Product/>
        <Footer/>
      

        
    </div>
)
}

export default Home;