import React,{Component} from 'react';
import Node from './Node/Node';
import './Pathfinder.css';
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';
import {dfs} from '../algorithms/dfs';
import {bfs} from '../algorithms/bfs';
import {astar} from '../algorithms/Astar';

const TOTAL_ROW = 15;
const TOTAL_COL = 50;
const START_NODE_ROW = Math.floor(Math.random() * TOTAL_ROW);
const START_NODE_COL = Math.floor(Math.random() * TOTAL_COL);
const FINISH_NODE_ROW = Math.floor(Math.random() * TOTAL_ROW);
const FINISH_NODE_COL = Math.floor(Math.random() * TOTAL_COL);
const BOMB_ROW = Math.floor(Math.random() * TOTAL_ROW);
const BOMB_COL = Math.floor(Math.random() * TOTAL_COL);
let nodesInOrderG = [];
let intermediateNodesInOrderG = [];
let shortestPathG = [];

export default class Pathfinder extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        nodes: [],
        mouseIsPressed: false,
        bombActive: false,
        isFast:true,
        shortest_path_node_count:0,
      };
    }

  componentDidMount() {
    this.makeGrid();
  }

  makeGrid = ()=>{
    const nodes = [];
      for(let row = 0;row<TOTAL_ROW; row++){
          const currRow = [];
          for(let col = 0;col<TOTAL_COL;col++){
            currRow.push(singleNode(row,col));
          }
          nodes.push(currRow);
      }
      this.setState({nodes});
  }

  applyDijkstra() {
  
    const {nodes,bombActive} = this.state;
    let intermediateNodesInOrder=[];
    if(bombActive === true){
      const intermediateStart = nodes[START_NODE_ROW][START_NODE_COL];
      const intermediateEnd = nodes[BOMB_ROW][BOMB_COL];
      intermediateNodesInOrder = dijkstra(nodes, intermediateStart, intermediateEnd);
      const newGrid = getNewGridWithDistanceInfy(this.state.nodes);
      this.setState({nodes: newGrid});
      
      const startNode = nodes[BOMB_ROW][BOMB_COL];
      const finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
      const nodesInOrder = dijkstra(nodes, startNode , finishNode);
      const shortestPath = getNodesInShortestPathOrder(finishNode);
      this.animate(nodesInOrder, shortestPath,intermediateNodesInOrder);
      nodesInOrderG = nodesInOrder;
      intermediateNodesInOrderG = intermediateNodesInOrder;
      shortestPathG = shortestPath;
    }
    else{
      const startNode = nodes[START_NODE_ROW][START_NODE_COL];
      const finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
      const nodesInOrder = dijkstra(nodes, startNode, finishNode);
      const shortestPath = getNodesInShortestPathOrder(finishNode);
      this.animate(nodesInOrder, shortestPath,intermediateNodesInOrder);
      nodesInOrderG = nodesInOrder;
      shortestPathG = shortestPath;
    }
  }
  applyDfs() {
  
    const {nodes,bombActive} = this.state;
    let intermediateNodesInOrder=[];
    if(bombActive === true){
      const intermediateStart = nodes[START_NODE_ROW][START_NODE_COL];
      const intermediateEnd = nodes[BOMB_ROW][BOMB_COL];
      intermediateNodesInOrder = dfs(nodes, intermediateStart, intermediateEnd);
      const newGrid = getNewGridWithDistanceInfy(this.state.nodes);
      this.setState({nodes: newGrid});
      
      const startNode = nodes[BOMB_ROW][BOMB_COL];
      const finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
      const nodesInOrder = dfs(nodes, startNode , finishNode);
      const shortestPath = getNodesInShortestPathOrder(finishNode);
      this.animate(nodesInOrder, shortestPath,intermediateNodesInOrder);
      nodesInOrderG = nodesInOrder;
      intermediateNodesInOrderG = intermediateNodesInOrder;
      shortestPathG = shortestPath;
    }
    else{
      const startNode = nodes[START_NODE_ROW][START_NODE_COL];
      const finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
      const nodesInOrder = dfs(nodes, startNode, finishNode);
      const shortestPath = getNodesInShortestPathOrder(finishNode);
      this.animate(nodesInOrder, shortestPath,intermediateNodesInOrder);
      nodesInOrderG = nodesInOrder;
      shortestPathG = shortestPath;
    }
  }
  applyBfs() {
  
    const {nodes,bombActive} = this.state;
    let intermediateNodesInOrder=[];
    if(bombActive === true){
      const intermediateStart = nodes[START_NODE_ROW][START_NODE_COL];
      const intermediateEnd = nodes[BOMB_ROW][BOMB_COL];
      intermediateNodesInOrder = bfs(nodes, intermediateStart, intermediateEnd);
      const newGrid = getNewGridWithDistanceInfy(this.state.nodes);
      this.setState({nodes: newGrid});
      
      const startNode = nodes[BOMB_ROW][BOMB_COL];
      const finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
      const nodesInOrder = bfs(nodes, startNode , finishNode);
      const shortestPath = getNodesInShortestPathOrder(finishNode);
      this.animate(nodesInOrder, shortestPath,intermediateNodesInOrder);
      nodesInOrderG = nodesInOrder;
      intermediateNodesInOrderG = intermediateNodesInOrder;
      shortestPathG = shortestPath;
    }
    else{
      const startNode = nodes[START_NODE_ROW][START_NODE_COL];
      const finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
      const nodesInOrder = bfs(nodes, startNode, finishNode);
      const shortestPath = getNodesInShortestPathOrder(finishNode);
      this.animate(nodesInOrder, shortestPath,intermediateNodesInOrder);
      nodesInOrderG = nodesInOrder;
      shortestPathG = shortestPath;
    }
  }
  
  applyAstar() {
  
    const {nodes,bombActive} = this.state;
    let intermediateNodesInOrder=[];
    if(bombActive === true){
      const intermediateStart = nodes[START_NODE_ROW][START_NODE_COL];
      const intermediateEnd = nodes[BOMB_ROW][BOMB_COL];
      intermediateNodesInOrder = astar(nodes, intermediateStart, intermediateEnd);
      const newGrid = getNewGridWithDistanceInfy(this.state.nodes);
      this.setState({nodes: newGrid});
      
      const startNode = nodes[BOMB_ROW][BOMB_COL];
      const finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
      const nodesInOrder = astar(nodes, startNode , finishNode);
      const shortestPath = getNodesInShortestPathOrder(finishNode);
      this.animate(nodesInOrder, shortestPath,intermediateNodesInOrder);
      nodesInOrderG = nodesInOrder;
      intermediateNodesInOrderG = intermediateNodesInOrder;
      shortestPathG = shortestPath;
    }
    else{
      const startNode = nodes[START_NODE_ROW][START_NODE_COL];
      const finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
      const nodesInOrder = astar(nodes, startNode, finishNode);
      console.log(nodesInOrder);
      const shortestPath = getNodesInShortestPathOrder(finishNode);
      this.animate(nodesInOrder, shortestPath,intermediateNodesInOrder);
      nodesInOrderG = nodesInOrder;
      shortestPathG = shortestPath;
    }
  }

  deanimate(nodesInOrder, shortestPath,intermediateNodesInOrder){
    this.makeGrid();
    this.setState({shortest_path_node_count:0});
    if(this.state.bombActive===true){
      const{bombActive} = this.state;
      this.setState({bombActive: !bombActive});
      getNewGridWithBombToggled(this.state.nodes);
    }

    let n = intermediateNodesInOrder.length;
    for (let i = 0; i < n; i++) {
        const node = intermediateNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node ';
      }
      for (let i = 0; i <= nodesInOrder.length; i++) {
        const node = nodesInOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).className =
          'node ';
      }
      
  } 

  animate(nodesInOrder, shortestPath,intermediateNodesInOrder) {
    const{isFast} = this.state;
    let n = intermediateNodesInOrder.length;
    for (let i = 0; i <= n; i++) {
      setTimeout(() => {
        const node = intermediateNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited2';
      }, (isFast ? 10:50) * i);
    }
    setTimeout(() => {
      for (let i = 0; i <= nodesInOrder.length; i++) {
        if (i === nodesInOrder.length) {
          setTimeout(() => {
            this.animateShortestPath(shortestPath);
          }, (isFast ? 10:50) * i);
          this.setState({shortest_path_node_count:shortestPathG.length});
          return;
        }
  
        setTimeout(() => {
            const node = nodesInOrder[i];
            document.getElementById(`node-${node.row}-${node.col}`).className =
            'node node-visited';
          }, (isFast ? 10:50) * i);
      }
    }, (isFast ? 10:50) *n);

    
  }
  // animateDijkstra2(intermediateNodesInOrder) {
  //   const{isFast} = this.state;
  //   for (let i = 0; i <= intermediateNodesInOrder.length; i++) {
  //     setTimeout(() => {
  //       const node = intermediateNodesInOrder[i];
  //       document.getElementById(`node-${node.row}-${node.col}`).className =
  //         'node node-visited2';
  //     }, (isFast ? 10:50) * i);
  //   }
  // }

  animateShortestPath(shortestPath) {
    const{isFast,bombActive} = this.state;
    let k = true;
    for (let i = 0; i < shortestPath.length; i++) {
      setTimeout(() => {
        const node = shortestPath[i];
        if(node.row === BOMB_ROW && node.col === BOMB_COL && bombActive===true) k = false;
        if(k===true){
          document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
        }
        else{
          document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path2';
        }
      }, (isFast ? 10:50) * i);
    }
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.nodes, row, col);
    this.setState({nodes: newGrid, mouseIsPressed: true});
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.nodes, row, col);
    this.setState({nodes: newGrid});
  }

  handleMouseUp() {
    this.setState({mouseIsPressed: false});
  }


  checkBomb(){
    const {bombActive} = this.state;
    this.setState({bombActive: !bombActive});
    if (this.state.bombActive){
      const newGrid = getNewGridWithBombToggled(this.state.nodes);
      this.setState({nodes: newGrid});
      return;
    }
    const newGrid = getNewGridWithBombToggled(this.state.nodes);
    this.setState({nodes: newGrid});
  }

  checkFast(){
    const {isFast} = this.state;
    this.setState({isFast: !isFast});
  }

  generateMaze(){
    if(this.state.bombActive) return;
    for(let i=0;i<((TOTAL_ROW*TOTAL_COL)/3);i++){
      const r = Math.floor(Math.random() * TOTAL_ROW);
      const c = Math.floor(Math.random() * TOTAL_COL);
      if(START_NODE_ROW === r && START_NODE_COL===c) continue;
      if(FINISH_NODE_ROW === r &&FINISH_NODE_COL===c) continue;

      const newGrid = getNewGridWithWallToggled(this.state.nodes, r, c);
      this.setState({nodes: newGrid});
    }
  }
  

  render() {
    const{nodes,mouseIsPressed,bombActive} = this.state;
    return <div>
        <div className="header">
          <h1 className='header_h1' >Pathfinder Visualizer</h1>
          <div className='header_comp'>
          <div className="dropdown">
            <button className=" dropdown-toggle dropdown_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Select Algorithm
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={() => this.applyDijkstra()}>Dijkstra's</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => this.applyDfs()}>Dfs</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => this.applyBfs()}>Bfs</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => this.applyAstar()}>A Star</a></li>
            </ul>
          </div>
            {/* <button onClick={() => this.applyDijkstra()}>
              Apply Dijkstra
            </button>
            <button onClick={() => this.applyDfs()}>
              Apply Dfs
            </button> */}
            <button onClick={() => this.checkBomb()}>
              Gift
            </button>
            <button onClick={() => this.checkFast()}>
              Fast
            </button>
            <button onClick={() => this.generateMaze()}>
              Random Maze
            </button>
          </div>
        </div>
        <div className='home'>
          <div className="grid">
              {
                  nodes.map((row,rowIdx)=>{
                      return <div key={rowIdx}>
                          {row.map((node,nodeIdx)=>{
                              const {row, col, isFinish, isStart, isWall,isBomb,shortest_path_node_count} = node;
                              return(
                                  <Node key={nodeIdx}
                                   row={row}
                                   col={col}
                                   isStart={isStart}
                                   isFinish={isFinish}
                                   isWall={isWall}
                                   mouseIsPressed={mouseIsPressed}
                                   onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                                   onMouseEnter={(row, col) => this.handleMouseEnter(row, col)}
                                   onMouseUp={() => this.handleMouseUp()}
                                   isBomb={isBomb}
                                   shortest_path_node_count={shortest_path_node_count}
                                   bombActive={bombActive}>
                                  </Node>
                              )
                          })}
                      </div>
                  })
              }
            
          </div>
            <div className='bottom_btn'>
              <button onClick={() => this.deanimate(nodesInOrderG, shortestPathG,intermediateNodesInOrderG)}>
                Clear
              </button>
              <h3 className='bottom_label'>Shortest Path : <label className='bottom_l' >{this.state.shortest_path_node_count}</label> </h3>
              
            </div>
        </div>
    </div>
  }  
}

const singleNode = (row, col)=> {
    return{
        row,
        col,
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        distance: Infinity,
        isVisited:false,
        isWall: false,
        previousNode: null,
        isBomb:false,
        distanceToFinishNode: Math.abs(FINISH_NODE_ROW - row) + Math.abs(FINISH_NODE_COL - col),
}}

const getNewGridWithWallToggled = (nodes, row, col) => {
    const newGrid = nodes.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

const getNewGridWithBombToggled = (nodes) => {
    const newGrid = nodes.slice();
    const node = newGrid[BOMB_ROW][BOMB_COL];
    let newNode;
    if(node.isWall){
      newNode = {
        ...node,
        isBomb: !node.isBomb,
        isWall: !node.isWall,
      };
    } 
    else{
      newNode = {
        ...node,
        isBomb: !node.isBomb,
      };
    }
    newGrid[BOMB_ROW][BOMB_COL] = newNode;
    return newGrid;
  };

const getNewGridWithDistanceInfy = (nodes) => {
    const newGrid = nodes.slice();
    for(let row = 0;row<15; row++){
      for(let col = 0;col<50;col++){
        const node = newGrid[row][col];
        const newNode = {
          ...node,
          distance: Infinity,
          isVisited:false,
        };
        newGrid[row][col] = newNode;
      }
  }
    return newGrid;
  };

