import styled from "@emotion/styled";
import image from "../assets/52cfdf28-c53e-48f7-b951-f98b35baafd9-removebg-preview.png";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <H1>Learn new skills online with top educators</H1>
          <Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Content>
          <Button>Started Learning Today</Button>
        </Left>
        <Right>
          <ImageHolder>
            <img src={image} />
          </ImageHolder>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const ImageHolder = styled.div`
  background: linear-gradient(
    117deg,
    rgba(124, 161, 236, 1) 10%,
    rgba(199, 179, 238, 1) 40%,
    rgba(241, 147, 172, 1) 91%
  );
  height: 240px;
  border-radius: 40px;
  display: flex;
  justify-content: center;

  img {
    width: 300px;
    height: 450px;
    object-position: center;
    position: relative;
    bottom: 210px;
  }
  @media (max-width: 809px) {
    width: 300px;
    height: 200px;
    img {
      width: 200px;
      height: 300px;
      bottom: 100px;
    }
  }
`;

const Right = styled.div`
  flex: 1;

  @media (max-width: 809px) {
    width: 100%;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
`;
const Button = styled.button`
  border: 0px;
  padding: 15px 25px;
  background-color: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
const Content = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-right: 10px;
  margin-bottom: 20px;
  @media (max-width: 809px) {
    text-align: center;
    font-size: 12px;
  }
`;
const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 25px;

  @media (max-width: 1014px) {
    font-size: 2.8rem;
  }

  @media (max-width: 809px) {
    text-align: center;
    font-size: 2rem;
  }
`;
const Left = styled.div`
  flex: 1;
  margin-top: 30px;

  @media (max-width: 809px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  height: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;

  @media (max-width: 809px) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
