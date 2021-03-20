import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';


function BoardTile() {

    return (
        <>

        </>
    );
}

function Game(props) {

    return (
            <div className="card m-5 flex-grow-1 rounded-0 justify-content-center" ref={targetRef}>
                <div className="d-flex flex-row flex-grow-1 justify-content-center">
                    <div className="d-flex flex-column flex-grow-1 align-items-center">
                        <div className="d-flex flex-grow-1 align-items-center border border-primary">Flex item 1</div>
                        <div className="d-flex flex-grow-1 align-items-center border border-primary">Flex item 2</div>
                        <div className="d-flex flex-grow-1 align-items-center border border-primary">Flex item 3</div>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 align-items-center">
                        <div className="d-flex flex-grow-1 align-items-center border border-primary">Flex item 1</div>
                        <div className="d-flex flex-grow-1 align-items-center border border-primary">Flex item 2</div>
                        <div className="d-flex flex-grow-1 align-items-center border border-primary">Flex item 3</div>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 align-items-center">
                        <div className="d-flex flex-grow-1 align-items-center border border-primary">Flex item 1</div>
                        <div className="d-flex flex-grow-1 align-items-center border border-primary">Flex item 2</div>
                        <div className="d-flex flex-grow-1 align-items-center border border-primary">Flex item 3</div>
                    </div>
                </div>
            </div>
    );


}

export default Game;