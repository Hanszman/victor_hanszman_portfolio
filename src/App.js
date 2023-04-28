// Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/layout/container/Container';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/home/Home';
import Experiences from './components/pages/experiences/Experiences';
import Skills from './components/pages/skills/Skills';
import Projects from './components/pages/projects/Projects';

// TODO: Acrescentar o campo array de intervalos de experiência em cada tecnologia e adaptar a função getAge para isso
// TODO: Agrupar arrayLists e arrayListsTitle no mesmo objeto
// TODO: Enviar mais de um vetor no arrayLists
// TODO: Talvez transformar item do card em um componente separado
// TODO: Transformar as sublistas em um componente separado
// TODO: Talvez melhorar agrupamento da groupByList caso o usuário queira mudar agrupamentos de type ou stack ou os dois juntos
// TODO: Criar listas de links de prod e git nos cards
// TODO: Fazer filtros nas páginas
// TODO: Talvez fazer paginação
// TODO: Instalar biblioteca chart.js e fazer gráficos
// TODO: Talvez fazer página sobre meus gostos e vida pessoal
// TODO: Terminar de fazer os projetos que estão inacabados, fazer o deploy deles e atualizar os dados deles nos jsons do portfólio

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