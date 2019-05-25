import React from 'react';
import './AppNavbar.sass'
import { CSSTransition } from 'react-transition-group';
import useGlobal from './../../store/state'

interface ModalColorSelectProps {
  active: boolean,
  toggleModal: Function
}

function ModalColorSelect(props: ModalColorSelectProps) {
  const [globalState, globalActions] = useGlobal()

  function setTheme (color: string) {
    // setThemeColor('blue')
    globalActions.setColor(color)
    props.toggleModal()
  }

  return (
    <CSSTransition
      classNames='fader'
      in={props.active}
      unmountOnExit
      timeout={400}>
      <div className={"modal is-active"}>
        <div className="modal-background" onClick={() => props.toggleModal()}></div>
        <div className="modal-card">
          <div className="modal-card-head">
            <p className="modal-card-title">Choose a theme:</p>
            <button className="delete" aria-label="close" onClick={() => props.toggleModal()}></button>
          </div>
          <div className="modal-card-body section">
            <div className="columns is-vcentered is-centered">
              <div className="column is-flex">
                <div className="theme-bg-blue theme-selector" onClick={() => setTheme('blue')}></div>
              </div>
              <div className="column is-flex">
                <div className="theme-bg-orange theme-selector" onClick={() => setTheme('orange')}></div>
              </div>
              <div className="column is-flex">
                <div className="theme-bg-green theme-selector" onClick={() => setTheme('green')}></div>
              </div>
            </div>
            <div className="columns is-vcentered is-centered">
              <div className="column is-flex">
                <div className="theme-bg-yellow theme-selector" onClick={() => setTheme('yellow')}></div>
              </div>
              <div className="column is-flex">
                <div className="theme-bg-purple theme-selector" onClick={() => setTheme('purple')}></div>
              </div>
              <div className="column is-flex">
                <div className="theme-bg-brown theme-selector" onClick={() => setTheme('brown')}></div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </CSSTransition>
  )
}

export default ModalColorSelect;
