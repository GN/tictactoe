import React, {useState} from 'react';
import {ReactComponent as ChalkX} from '../../chalk-x.svg';
import {ReactComponent as ChalkO} from '../../chalk-o.svg';

const XPiece = () => {
    return <ChalkX/>;
}
const OPiece = () => {
    return <ChalkO/>;
}

function Game(props) {

    const Empty = (props) => {
        return <svg onClick={(e) => {
            handleClick(e)
        }} id={props.idc} width='90%' height='90%' viewBox='0 0 450 450'/>;
    }

    const [getBoard, setBoard] = useState({
        1: <Empty idc={1}/>, 2: <Empty idc={2}/>, 3: <Empty idc={3}/>,
        4: <Empty idc={4}/>, 5: <Empty idc={5}/>, 6: <Empty idc={6}/>,
        7: <Empty idc={7}/>, 8: <Empty idc={8}/>, 9: <Empty idc={9}/>,
        'turn': true
    });
    const classes = 'd-flex flex-grow-1 border align-items-center justify-content-center';


    const handleClick = (e) => {
        setBoard(getBoard => ({
            ...getBoard,
            [e.target.id]: getBoard['turn'] ? <XPiece/> : <OPiece/>,
            'turn': !getBoard['turn']
        }));
    }
    return (
        <div className='d-flex flex-column flex-grow-1 justify-content-center align-self-center w-100'>

            <div className='card small-card h-100 flex-grow-1 rounded-0 align-self-center border-0' style={{
                maxWidth: '85vmin',
                minWidth: '85vmin',
                minHeight: '85vmin',
                maxHeight: '85vmin',
                backgroundColor: "rgb(0,0,0,0)"
            }}>
                <div className='d-flex flex-row flex-grow-1'>
                    <div className={classes + ' border-left-0 border-top-0'}>{getBoard[1]}</div>
                    <div className={classes + '  border-top-0'}>{getBoard[2]}</div>
                    <div className={classes + '  border-right-0 border-top-0'}>{getBoard[3]}</div>
                </div>
                <div className='d-flex flex-row flex-grow-1'>
                    <div className={classes + '  border-left-0'}>{getBoard[4]}</div>
                    <div className={classes}>{getBoard[5]}</div>
                    <div className={classes + '  border-right-0'}>{getBoard[6]}</div>
                </div>
                <div className='d-flex flex-row flex-grow-1'>
                    <div className={classes + '  border-left-0 border-bottom-0'}>{getBoard[7]}</div>
                    <div className={classes + '  border-bottom-0'}>{getBoard[8]}</div>
                    <div className={classes + ' border-bottom-0 border-right-0'}>{getBoard[9]}</div>
                </div>
            </div>
        </div>
    );

}

export default Game;