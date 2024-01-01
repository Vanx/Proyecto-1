import React from "react";

function Texto (props) {
return (<>
 <h1>
    {props.titulo}
 </h1>
      <h2>{props.texto}</h2>
    
</>)

}

export default Texto;