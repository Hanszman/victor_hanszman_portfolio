// Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/layout/container/Container';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/home/Home';
import Experiences from './components/pages/experiences/Experiences';
import Skills from './components/pages/skills/Skills';
import Projects from './components/pages/projects/Projects';

// TODO: Criar separação entre tempos de experiência
// TODO: Colocar de alguma forma as informações de conceitos conhecidos, como: design patterns, programming paradigms e architectures
// TODO: Melhorar a apresentação dos cards no css de cada página (tirar espaços brancos, centralizar, dividir informações em boxes, colocar tamanho padronizado, centralizar filtros)
// TODO: Melhorar apresentação das imagens (talvez colocar animações na interação com eles)
// TODO: Colocar imagens dos prints das telas do projetos
// TODO: Colocar links de referência entre as entidades e criar modais de visualização
// TODO: Criar listas de links de prod e git nos cards (com os ícones do git e vercel)
// TODO: Arrumar espaço para footer quando as pesquisas resultam em poucos resultados ou nenhum
// TODO: Terminar de fazer os projetos que estão inacabados, fazer o deploy deles e atualizar os dados deles nos jsons do portfólio
// TODO: Colocar nos README.md de todos os projetos as versões das tecnologias para facilitar a instação além dos seus links de produção
// TODO: Escolher a paleta cores para os gráficos
// TODO: Ajustar responsividade
// TODO: Remover mensagem de projeto ainda em desenvolvimento
// TODO: Talvez separar em abas a tela de skills
// TODO: Talvez finalizar último gráfico (BarChart TechnologiesByExperience) e organizar melhor a posição deles na tela
// TODO: Talvez colocar as certificações e diplomas exibidas em um carrossel
// TODO: Talvez adicionar o idioma espanhol
// TODO: Talvez fazer paginação
// TODO: Talvez arrumar inputs de data para mm/dd/yyyy quando estiver no idioma em inglês
// TODO: Talvez ordenar por prioridade os agrupamentos na função formatList
// TODO: Talvez melhorar agrupamento da formatList caso o usuário queira mudar agrupamentos de type ou stack ou os dois juntos por exemplo
// TODO: Talvez inserir no json de skills os padrões de projeto como POO e MVC por exemplo
// TODO: Talvez fazer página sobre meus gostos e vida pessoal

// Component
function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/experiences' element={<Experiences/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

// Exportation
export default App;