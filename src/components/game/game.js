import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';

function Game(props) {
    return (
            <div className="d-flex flex-grow-1 justify-content-center">
                <div className="card small-card h-100 flex-grow-1 rounded-0 align-self-center border-0" style={{maxWidth: '85vmin',minWidth: '85vmin', minHeight: '85vmin', maxHeight:'85vmin', backgroundColor: "rgb(0,0,0,0)"}}>
                    <div className="d-flex flex-grow-1">
                        <div className="d-flex flex-grow-1 border align-items-center justify-content-center border-top-0 border-left-0">Flex item 1</div>
                        <div className="d-flex flex-grow-1 border align-items-center justify-content-center border-top-0">Flex item 2</div>
                        <div className="d-flex flex-grow-1 border align-items-center justify-content-center border-top-0 border-right-0">Flex item 3</div>
                    </div>
                    <div className="d-flex flex-grow-1">
                        <div className="d-flex flex-grow-1 border align-items-center justify-content-center border-left-0">Flex item 1</div>
                        <div className="d-flex flex-grow-1 border align-items-center justify-content-center">Flex item 2</div>
                        <div className="d-flex flex-grow-1 border align-items-center justify-content-center border-right-0">Flex item 3</div>
                    </div>
                    <div className="d-flex flex-grow-1">
                        <div className="d-flex flex-grow-1 border align-items-center justify-content-center border-left-0 border-bottom-0">Flex item 1</div>
                        <div className="d-flex flex-grow-1 border align-items-center justify-content-center border-bottom-0">Flex item 2</div>
                        <div className="d-flex flex-grow-1 border align-items-center justify-content-center border-right-0 border-bottom-0">Flex item 3</div>
                    </div>
                </div>
            </div>
    );

}

export default Game;