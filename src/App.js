// import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import styled from 'styled-components';

const ContainerApp = styled.div`
  display: flex;
  width: 46%;
  height: 90vh;
  border-radius: 25px;
  //border: 1px solid black;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;

`

function App() {
  return (
    <ContainerApp>
      <Header/>
      <Main/>
     </ContainerApp>
  );
}

export default App;







