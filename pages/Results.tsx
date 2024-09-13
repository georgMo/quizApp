
import { Button, Box } from '@material-ui/core';
import { Resultwrapper, ResultboxWrapper, AnswerWrapper, CenteredContentWrapper} from "./styles";
import { useContext } from 'react'

import AppContext from "../AppContext";
import  { useRouter } from 'next/router';
import Header from '../components/Header';

 export  const Results = () => {
 const context= useContext(AppContext); 
 const router = useRouter();  
 const points = Object.values(router.query)[0]
 const numberOfquestions= context.fetchedQuestions.length

 return(


    
    <div> 
         <Header title="Results" />
        
        <CenteredContentWrapper>
        <div> Your Points: {points} / {numberOfquestions} </div>
        <Box marginLeft='auto'>
        
        <Button
        variant="contained"
        onClick={()=> {router.push( '/',);  }}
       
        
        >Try Again!</Button>
        </Box>
        {numberOfquestions> 0 && (context.fetchedQuestions).map((question:any) => 
       <ResultboxWrapper  key = {context.fetchedQuestions.indexOf(question)}> 
       
       <Resultwrapper>
       Question  {context.fetchedQuestions.indexOf(question)+1}: {question.question} <br/>
       Correct answer : <AnswerWrapper> {question.correctAnswer} </AnswerWrapper>
       </Resultwrapper>
       </ResultboxWrapper>
       
        )
        } 
        </CenteredContentWrapper></div>
)



}

export default Results;