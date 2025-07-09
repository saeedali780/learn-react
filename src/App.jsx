import React from 'react';

import styled from 'styled-components';

const App = () => {
  const Heading = styled.h1`
  color:red;
  border:1px solid green;
  border-radious:10px;
  margin:10px;
  padding:10px;
  width:200px;
  `
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
    <Heading>Hello Saeed</Heading>
    <Heading>Hello Saeed</Heading>
    <Heading>Hello Saeed</Heading>
    <Heading>Hello Saeed</Heading>
     <Heading>Hello Saeed</Heading>
     <Heading>Hello Saeed</Heading> 
     <Heading>Hello Saeed</Heading>
     <Heading>Hello Saeed</Heading>
     <Heading>Hello Saeed</Heading>
     <Heading>Hello Saeed</Heading>
     
   
    </div>
  )
}

export default App