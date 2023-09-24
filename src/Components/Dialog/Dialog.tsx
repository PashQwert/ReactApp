import React, { PropsWithChildren} from "react";
import { useState } from 'react';
// @ts-ignore
import { Portal } from 'react-portal';
import FocusTrap from "focus-trap-react";
import './Dialog.css';

interface DialogProps{
    title: string,
    onClose: () => void
}

const Dialog = (props:PropsWithChildren<DialogProps>):React.ReactElement => {    
    const [showModal, setShowModal] = useState(false);  
    const ModalContent = ({title,onClose}:DialogProps) => <FocusTrap focusTrapOptions={{
        fallbackFocus: "#dialogCloseButton",
        clickOutsideDeactivates: true,
        returnFocusOnDeactivate: true,
    }}>
    <div className="dialogBox"> 
        <div className="dialogTitle">{props.title}</div>   
        <input className="dialogCloseButton" type="button" onClick={onClose} value="X" id="dialogCloseButton" tabIndex={-1}/> 
        <div className="dialogChildren">{props.children}</div> 
    </div></FocusTrap>;  
    return (<>
        <button onClick={() => setShowModal(true)}>
            Show modal using a portal
        </button>
        
        {showModal &&         
            <Portal>
                <ModalContent title={props.title} onClose={() => setShowModal(false)} />
            </Portal>
        }
      </>
    )
}
  
export default Dialog;