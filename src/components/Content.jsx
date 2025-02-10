import React from 'react'

export const Content = () => {
      var name= "kaushal";
      var age=21;
      var isactive=false;
  return (
    <div style={{position:"fixed",textAlign:"center",alignContent:"center",width:"100%",height:"400px"}}>
    
    <h1>Hello World</h1>
    <h2>name:{name}</h2>
    <h2>age: {age}</h2>
    <h2>Active ? {isactive==true ?"active":"not active "}</h2>
    </div>

  )
}
