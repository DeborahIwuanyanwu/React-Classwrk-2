import styled from "@emotion/styled" 
import image from "../assets/african-female-soldier-jobs-career-portrait.jpg"
import { FaUser } from "react-icons/fa";

const Profile = () => {
    
    return(
            <Wrapper>
                <InnerWrapper>
                    <ProfileDetail>
                        <ProfileImage> <img src={image}/></ProfileImage>
                        <H1>Alice Girard</H1>
                        <B>UX Designer</B>
                    </ProfileDetail>
                    <Text>If you equip people with the right tools, they will build the most extraordinary things.
                    </Text>
                    <Background>
                        <Personal>
                            Personal background
                        </Personal>
                        <Holder>
                        <IconText>
                            <FirstValue>
                                <IconImage>< FaUser /></IconImage>
                                <AnotherText>27</AnotherText>
                            </FirstValue>
                            <FirstValue>
                                <IconImage>< FaUser /></IconImage>
                                <AnotherText>Paris, France</AnotherText>
                            </FirstValue>
                            <FirstValue>
                                <IconImage>< FaUser /></IconImage>
                                <AnotherText>Female</AnotherText>
                            </FirstValue>
                            </IconText>
                            <IconText>
                            <FirstValue>
                                <IconImage>< FaUser /></IconImage>
                                <AnotherText>C.Science</AnotherText>
                            </FirstValue>
                            <FirstValue>
                                <IconImage>< FaUser /></IconImage>
                                <AnotherText>Design Student</AnotherText>
                            </FirstValue>
                            <FirstValue>
                                <IconImage>< FaUser /></IconImage>
                                <AnotherText>Single</AnotherText>
                            </FirstValue>
                        </IconText>
                        </Holder>
                    </Background>

                    <Background>
                        <Personal>
                            Professional background
                        </Personal>
                        <Holder>
                        <IconText>
                        <FirstValue>
                            <IconImage>< FaUser /></IconImage>
                            <AnotherText>UX Designer@Guillet.io</AnotherText>
                         </FirstValue>
                         <FirstValue>
                            <IconImage>< FaUser /></IconImage>
                            <AnotherText>UX Designer@Guillet.io</AnotherText>
                         </FirstValue>
                         </IconText>
                            </Holder>
                            </Background>
                            <Circle>
                                <CircleHolder>
                                    <TextHolder>Cooperative</TextHolder>
                                    <TextHolder>Kind</TextHolder>
                                    <TextHolder>Reliable </TextHolder>
                                </CircleHolder>
                                <CircleHolder>
                                    <TextHolder>Creative</TextHolder>
                                    <TextHolder>Smart</TextHolder>
                                    <TextHolder>Organized</TextHolder>
                                </CircleHolder>
                            </Circle>
                </InnerWrapper>
            </Wrapper>
    )
}

export default Profile;

const Wrapper = styled.div`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    font-family: sans-serif;
    /* flex: 1; */
`
const InnerWrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
gap: 19px;

`
const ProfileDetail = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
flex-direction: column;

`
const ProfileImage = styled.div`
width: 130px;
height: 130px;
border-radius: 45px ;
border: 7px solid white;
box-shadow: 3px 3px 7px #5a5a5a;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 45px ;
    /* border-radius: 100%; */
    object-position: center;
}
`
const H1 = styled.h1`
font-size: 27px;
color: #3D65AA;
margin-top: 13px;
`
const B = styled.b`
font-size: 15px;
`
const Text = styled.p`
    font-size: 13px;
    font-style: italic;
    /* font-weight: 500; */
`

const Background = styled.div`
display: flex;
flex-direction: column;
`
const Personal = styled.b`
    font-size: 16px;
    color: #3D65AA;
`
const Holder = styled.div`
display:flex;
padding-top: 10px;
`
const IconText = styled.div`
width: 100%;
`
const FirstValue = styled.div`
/* width: 60%; */
gap: 10px;
/* background-color: #292929; */
display: flex;
margin-top: 3px;

`
const IconImage = styled.div`
width: 20px;
height: 20px;
color: #3D65AA;

`
const AnotherText = styled.p`
font-size: 13px;
font-weight: 500;
`
const Circle = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
const CircleHolder = styled.div`
display: flex;
justify-content: space-between;
`
const TextHolder = styled.div`
padding: 10px 20px ;
border-radius: 17px;
background-color: #D5DDEA;
font-size: 13px;
color: #3D65AA;
font-weight: 600;
`






