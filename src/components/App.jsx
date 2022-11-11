import React from "react";
import { Section } from "./Section";
import { FeedbackOptions } from "./Feedback";
import { Statistics } from "./Statistics";
import { Notification } from "./Notifications";

export class App extends React.Component {
   state = {
      good:0,
      neutral:0,
      bad:0,
   };
   ///////////////Count Total Feedback
 total = () => {
   return this.state.good + this.state.neutral + this.state.bad;
 };
// //////Count Total Positive Percentage
countPositivePercentage = () => {
   let percentage = Math.floor(
     ((this.state.good / this.total()) * 100).toFixed(0)
   );
   if (isNaN(percentage)) {
     return 0;
   } else return percentage;
 };
//
reviewClick = whichButtonWasClicked => {
   switch (whichButtonWasClicked) {
     case 'good':
       this.setState(state => ({ good: state.good + 1 }));
       break;
     case 'neutral':
       this.setState(state => ({ neutral: state.neutral + 1 }));
       break;
     case 'bad':
       this.setState(state => ({ bad: state.bad + 1 }));
       break;
     default:
       return 0;
   }
 };
////////////////////    RENDER   ////////////
   render(){
      const {good,neutral,bad}= this.state;
         return(
            <div style={{
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
                  <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.reviewClick} >
                  </FeedbackOptions>
               </Section>
               <Section title="Statistics">
                  {this.total() ===0 
                  ?( <Notification message='There is no feedback'></Notification>)
                  :( <Statistics good={good} neutral={neutral} bad={bad} total={this.total()} 
                  positivefeedback={this.countPositivePercentage()}>
                  </Statistics> )}
               </Section>

            </div>
         )
   }



}

