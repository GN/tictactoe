import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

function NewGameModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="btn btn-outline-info btn-lg btn-block" onClick={handleShow}>
                Start New Game
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Game</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="basic-url">Your vanity URL</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">https://tictac.io/games/</span>
                        </div>
                        <input type="text" readOnly className="form-control" id="basic-url" aria-describedby="basic-addon3" value='the-salty-splatoon'/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                        <div className="btn btn-outline-danger btn-lg pull-left" onClick={handleClose}>Close</div>
                        <div className="btn btn-outline-info btn-lg pull-right" onClick={handleClose}>Start New Game</div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function Home(props){
    return(
      <>
          <div className='d-flex flex-column flex-grow-1 justify-content-center align-self-center'>
              <div className='container align-items-center'>
                  <form>
                      <div className="form-group">
                          <div className="form-group">
                              <div className="input-group">
                                  <NewGameModal />
                                  <div className='btn btn-outline-info btn-lg btn-block'>Join or Spectate Game In Progress</div>
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </>
    );
}

export default Home;
