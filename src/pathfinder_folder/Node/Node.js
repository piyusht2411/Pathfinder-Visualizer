import React,{Component} from 'react'
import './Node.css'

export default class Node extends Component {
  render() {
    const {row,col,isStart,isFinish,isWall,onMouseDown,onMouseEnter,onMouseUp,isBomb} = this.props;
    const checkNode = isStart ? 'node-start' : isFinish ? 'node-finish' : isWall? 'node-wall':isBomb? 'node-bomb': ' ';

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${checkNode}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}>{isFinish? <span className="material-symbols-outlined">
        attach_money
        </span>:isStart? <span className="material-symbols-outlined">
        directions_bike
        </span>:isBomb?<span className="material-symbols-outlined">
        redeem
        </span>:''}</div>
    );
  }
}

