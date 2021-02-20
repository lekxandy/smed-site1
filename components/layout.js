import { Container} from 'react-bootstrap'
import NavBarCustom from './navbar'

export default function Layout({children}){
    return(
        <>
        <NavBarCustom/>
        <Container>
            {children}
        </Container>
        </>
    );
}