import React, { PropsWithChildren } from "react";
import './Dialog.css';

interface DialogProps{
    title: string,
    onClose: () => void
}

const Dialog = (props: PropsWithChildren<DialogProps>) => {        
    return (<div> 
        <div className="dialogTitle">{props.title}</div>   
        <div className="dialogChildren">{props.children}</div>
        <input className="dialogCloseButton" type="button" onClick={props.onClose}>Close</input>        
      </div>
    )
}
  
export default Dialog;