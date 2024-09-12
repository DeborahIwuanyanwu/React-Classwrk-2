import styled from '@emotion/styled'
import Profile from './components/Profile';
import Details from './components/Details';
import ThirdCard from './components/ThirdCard';
// import Form from './Javscript/Form';

const App = () => {
    return(
      <>
        <Container>
          <Profile/>
          <Details />
          <ThirdCard/> 
        </Container>
      </>
    )
};
export default App;

const Container = styled.div`
background-color: #E3E8F3;
/* height: 100vh; */
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
gap: 3px;
`


