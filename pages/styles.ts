import styled from "styled-components";



export const MainContainer = styled.div`



`;

export const QuizContainer = styled.div`

display:flex;
align-items: center;
padding-top: 8%;
flex-wrap: wrap;
flex-direction: column;


`;


export const MultipleChoiseWrapper = styled.div`
display:grid;
grid-template-columns: repeat(2, auto);
align-content:center;

`;
export const ResultboxWrapper = styled.div`

display:flex;
align-items: center;
padding-top: 60px;
flex-wrap: wrap;
flex-direction: column;

`;

export const Resultwrapper = styled.div`
border:3px solid lightblue;

padding: 20px;

background:linear-gradient(180deg, rgba(9,9,121,1) 0%, rgba(46,144,187,1) 0%, rgba(255,255,255,0.8494748241093313) 20%);
width: 100%;

`;


export const AnswerWrapper = styled.div`
color:green;
font-weight: 500;
display: inline-block;;


`;
export const CenteredContentWrapper = styled.div`
display:flex;
flex-direction: column;
flex-wrap:wrap;
align-content: center;
margin-bottom: 50px;

`;

export const ContentWrapper = styled.div`
display:flex;
align-content: center;
padding-top:8%;
flex-wrap: wrap;
flex-direction: column;



`;