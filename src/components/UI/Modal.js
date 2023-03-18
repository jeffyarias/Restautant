import React from 'react'
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';


const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHideCartHandler} />
};
const  ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const porrtalElement = document.getElementById('overlays');

const Modal = (props) => {
return (
  <>
  {ReactDOM.createPortal(<Backdrop onHideCartHandle={props.onHideCartHandler} />, porrtalElement)}
  {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, porrtalElement)}
  </>
)
};

export default Modal;