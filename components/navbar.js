import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from "react-bootstrap";

export default function NavBarCustom() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">SMED</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/biblioteca">Biblioteca</Nav.Link>
            
            <NavDropdown title="Materiais">
                <NavDropdown.Item>Educação infantil</NavDropdown.Item>
                <NavDropdown.Item>Ensino fundamental</NavDropdown.Item>
                <NavDropdown.Item>EJA</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="A secretaria">
                <NavDropdown.Item>Secretária</NavDropdown.Item>
                <NavDropdown.Item>Equipe</NavDropdown.Item>
                <NavDropdown.Item>Contato</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Links úteis">
         
            <NavDropdown.Item>Cadastros da Educação Infantil para o ano letivo de 2021</NavDropdown.Item>
            <NavDropdown.Item>Calendário Escolar 2021</NavDropdown.Item>
            <NavDropdown.Item>Informações - Estagiários 2021</NavDropdown.Item>
            <NavDropdown.Item>Informações - Pandemia COVID-19</NavDropdown.Item>
            <NavDropdown.Item>Ofícios</NavDropdown.Item>
            <NavDropdown.Item>Orientação sobre emissão de certidões</NavDropdown.Item>
            <NavDropdown.Item>Protocolo de Retorno às Aulas Presenciais</NavDropdown.Item>
            <NavDropdown.Item>Testes de Coordenação Pedagógica</NavDropdown.Item>
            </NavDropdown>
          <NavDropdown title="Sites externos" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://www.gov.br/mec/pt-br">MEC</NavDropdown.Item>
            <NavDropdown.Item href="https://plataformaintegrada.mec.gov.br/home">
              MEC RED
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.fnde.gov.br/">FNDE</NavDropdown.Item>
            <NavDropdown.Item href="https://www.gov.br/inep/pt-br">INEP</NavDropdown.Item>
            <NavDropdown.Item href="http://pddeinterativo.mec.gov.br/">PDDE Interativo</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="http://educacaoconectada.mec.gov.br/">
              Educação Conectada
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Sistemas">
                <NavDropdown.Item>Avaliação da Prática profissional</NavDropdown.Item>
                <NavDropdown.Item>Contrato de estagiários</NavDropdown.Item>
                <NavDropdown.Item>Emissão de documentos</NavDropdown.Item>
                <NavDropdown.Item>Inscrição para regime suplementar</NavDropdown.Item>
                <NavDropdown.Item>Processos de remoção</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        {/*
        <Form inline>
          <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
          <Button variant="outline-success">Pesquisar</Button>
        </Form>
        */}
      </Navbar.Collapse>
    </Navbar>
  );
}
