
import './App.css';
import Header from './Componentes/Header'
import styled from "styled-components"

const AppConteiner = styled.div `
  width: 100vw;
  height: 100vw;
  background-image: background-image: linear-gradient(90deg, #a192f3 35%, #2a07ee 90%);

  li {
  list-style: none;
  }
`
function App() {
  return (
    <AppConteiner>
    <Header></Header>
    </AppConteiner>
  )
}
export default App