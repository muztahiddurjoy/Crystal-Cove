import Footer from "../components/Footer/Footer"
import AboutContainer from "../components/Home/About/About"
import BookForm from "../components/Home/BookForm/BookForm"
import Rooms from "../components/Home/Rooms/Rooms"
import Reviews from "../components/Home/Reviews/Reviews"
import Navbar from "../components/Navbar/Navbar"

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <BookForm/>
    <AboutContainer/>
    <Rooms/>
    <Reviews/>
    <Footer/>
    </>
  )
}

export default HomePage