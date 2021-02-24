import { Container} from 'react-bootstrap'
import NavBarCustom from './navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function Layout({children, title}){
    return(
        <>
        <Head>
            <title>Secretaria muninipal de educação de Piraquara - {title}</title>
            <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <Container>

        <Image 
            src="/images/logo.png"
            width = {267}
            height={189}
            />
            </Container>
        <NavBarCustom/>
        <Container>
            {children}
        </Container>
        </>
    );
}