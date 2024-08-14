import { Container } from "react-bootstrap";
import Carouselhome from "./components/Carouselhome/Carouselhome";
import CuponsHome from './CuponsHome'
import ComentariosHome from "./ComentariosHome";
import '../index.css'

function Home() {
    return (
        <Container>
            <br>
            </br>
            <Carouselhome />
            <CuponsHome />
            <ComentariosHome />
            <br>
            </br>
        </Container>
    )
}

export default Home;