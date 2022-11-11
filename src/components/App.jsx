import React, {useState, useEffect} from "react";
import { Section } from "./Section";
import { FeedbackOptions } from "./Feedback";
import { Statistics } from "./Statistics";
import { Notification } from "./Notifications";


export const App = () => {
 const [good , setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);
 const [total, setTotal] = useState(0);
 const [positive, setPositive] = useState(0);

  ///////////////Count Total Feedback
const countTotal = (good, neutral, bad) => {
   return good + neutral + bad;
 };

// //////Count Total Positive Percentage
const countPositivePercentage = (good, total) => {
   let percentage = Math.floor(
     ((good / total) * 100).toFixed(0)
   );
   if (isNaN(percentage)) {
     return 0;
   } else return percentage;
 };
// ///
useEffect(() => {
   setTotal (countTotal(good, neutral, bad));
   setPositive (countPositivePercentage(good, total));
}, [good,neutral, bad, total])
//
const reviewClick = whichButtonWasClicked => {
   switch (whichButtonWasClicked) {
     case 'good':
      setGood(good + 1);
       break;
     case 'neutral':
      setNeutral(neutral + 1);
       break;
     case 'bad':
      setBad(bad + 1);
       break;
     default:
       return 0;
   }
 };
////////////////////    RENDER   ////////////////////
         return(
            <div 
               style={{
               height: '100%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'flex-start',
               flexDirection: 'column',
               fontSize: 40,
               color: '#010101',
               padding: '20px 10px',
            }}>
               <Section title='Please leave your feedback'>
                  <FeedbackOptions 
                     options = {['good', 'neutral', 'bad']}  
                     onLeaveFeedback={reviewClick} >
                  </FeedbackOptions>
               </Section>
               <Section title="Statistics">
                  {total ===0 
                  ?( <Notification message='There is no feedback'></Notification>)
                  :( <Statistics 
                     good={good} 
                     neutral={neutral} 
                     bad={bad} 
                     total={total} 
                     positivefeedback={positive}>
                  </Statistics> )}
               </Section>
            </div>
         );
      }

