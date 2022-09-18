
import Navigation from '../components/Navigation';
import Footer from "../components/Footer";
import ReservationProduct from "../components/reservationProduct"
import "../styles/components/reservationProduct.scss"



function Reservation() {

return (
    <div className ="Home">
        
          <Navigation/>
      <ReservationProduct />
        <Footer/>
      

        
    </div>
)
}

export default Reservation;