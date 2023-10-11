import ReactDOM from "react-dom";
import './Modal.css';

function Modal({  children,activate  }) {

    const status = activate ? 'activate' : 'deactivate';

    return ReactDOM.createPortal(
        <div className={`Modal ${status}`}>
            { children }
        </div>,
        document.getElementById('modal')
    );
}


export { Modal };