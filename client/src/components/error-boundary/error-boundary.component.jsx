import React from 'react';
import {ErrorImageOverlay,ErrorImageContainer,ErrorImageText} from './error-boundary.styles';

class ErrorBoundary extends React.Component{
  constructor(){
   super();

   this.state ={
    hasErrored: false
   };
  }
 static getDeriverStateFromError(error)
 {
     return { hasErrored: true};
 }
   componentDidCatch(error, info) {
       console.log(error);
   }
   render(){
     if(this.setState.hasErrored) {
      return (
       <ErrorImageOverlay>
       <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
       <ErrorImageText>SORRY THIS PAGE IS FUCKED UP RIGHT NOW</ErrorImageText>
       </ErrorImageOverlay>
      )
     }
     return this.props.children;
   }
  }

  export default ErrorBoundary;