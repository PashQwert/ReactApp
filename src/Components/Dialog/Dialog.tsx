import React, { PropsWithChildren} from "react";
import { useState } from 'react';
import { createPortal } from 'react-dom';
import './Dialog.css';

interface DialogProps{
    title: string,
    onClose: () => void
}

const Dialog = (props:PropsWithChildren<DialogProps>):React.ReactElement => {    
    const [showModal, setShowModal] = useState(false);  
    const ModalContent = ({title,onClose}:DialogProps) => <div className="dialogBox"> 
        <div className="dialogTitle">{props.title}</div>   
        <input className="dialogCloseButton" type="button" onClick={onClose} value="X"/> 
        <div className="dialogChildren">{props.children}</div>       
    </div>;  
    return (<>
        <button onClick={() => setShowModal(true)}>
            Show modal using a portal
        </button>
        
        {showModal && createPortal(
            <ModalContent title={props.title} onClose={() => setShowModal(false)} />,
            document.body
        )}
      </>
    )
}
  
export default Dialog;