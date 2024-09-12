import styled from "@emotion/styled" 
import { GiFlexibleLamp } from "react-icons/gi";


const Details = () =>{
    return(
        <Wrapper>
             <InnerWrapper>
                <User>
                    <IconHolder>
                        <GiFlexibleLamp />
                    </IconHolder>
                    <BoldText>User environment</BoldText>
                </User>
                <LineHolder>
                    <Text>
                        <InnerText>Home-Space</InnerText>
                        <InnerText>Office-Space</InnerText>
                    </Text>
                    <Line>
                        <Round></Round>
                    </Line>
                </LineHolder>
                <LineHolder>
                    <Text>
                        <InnerText>Home-Space</InnerText>
                        <InnerText>Office-Space</InnerText>
                    </Text>
                    <Line>
                        <Round1></Round1>
                    </Line>
                </LineHolder>
                <LineHolder>
                    <Text>
                        <InnerText>Home-Space</InnerText>
                        <InnerText>Office-Space</InnerText>
                    </Text>
                    <Line>
                        <Round2></Round2>
                    </Line>
                </LineHolder>
                <LastText>
                Alice works from home, but sometimes she commute to co-working space,
                 where she has the opportunity to share ideas with other people.Since
                 her job is remote now, she became quite handy with collaboration tools
                 like Figma,Miro,Zeplin etc .
                </LastText>
             </InnerWrapper>
        </Wrapper>
    )

}


export default Details;


const Wrapper = styled.div`
  width: 23%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    font-family: sans-serif;
    padding: 20px 0px;
`
const InnerWrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
gap: 20px;
`
const User = styled.div`
display: flex;
gap: 10px;
`
const IconHolder = styled.div`
color:#3D65AA ;
font-size: 17px;
`
const BoldText = styled.b`
font-size: 16px;
color: #3D65AA;
`
const LineHolder = styled.div`
margin-top: 10px;
`
const Text = styled.div`
display: flex;
justify-content: space-between;
`
const InnerText = styled.b`
font-size: 13px;
`
const Line = styled.div`
width: 100%;
height: 7px;
background-color: #D5DDEA;
border-radius: 5px;
display: flex;
align-items: center;
margin-top: 3px;
`
const Round = styled.div`
width: 12px;
height: 12px;
border-radius: 50px;
background-color: #3D65AA;
margin-left: 80px;
`
const Round1 = styled.div`
width: 12px;
height: 12px;
border-radius: 50px;
background-color: #3D65AA;
margin-left: 130px;
`
const Round2 = styled.div`
width: 12px;
height: 12px;
border-radius: 50px;
background-color: #3D65AA;
margin-left: 190px;
`

const LastText = styled.p`
    font-size: 13px;
`