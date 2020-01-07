import React from 'react';
import './SortingVisualizer.css'; 
import {getMergeSortAnimations} from '../SortingAlgorithms/sortingAlgorithms.js';
import {getBubbleSortAnimations} from '../SortingAlgorithms/sortingAlgorithms.js';
import {getQuickSortAnimations} from '../SortingAlgorithms/sortingAlgorithms.js';
import {getHeapSortAnimations} from '../SortingAlgorithms/sortingAlgorithms.js';
import {Navbar, Nav, Container} from 'react-bootstrap';


// Number of bars appearing in the visualizer
const NUMBER_OF_BARS = Math.floor((window.innerWidth * 0.7) / 4);

// Main color of bars
const PRIMARY_COLOR = 'turquoise';

// Color of bars being compared
const SECONDARY_COLOR = 'red';

// Animation speed
const ANIMATION_SPEED_MS = 1;

export class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for (let i=0; i<NUMBER_OF_BARS; i++){
            array.push(randomFromInterval(5, Math.floor((window.innerHeight * 0.75))));
        }
        this.setState({array});
    }


    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for (let i=0; i<animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort(){
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i=0; i<animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
            setTimeout(() => {
                const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight, isSwap] = animations[i];
                if (isSwap){
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${barTwoHeight}px`;
                    barTwoStyle.height = `${barOneHeight}px`;;
                }
            }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort(){
        const animations = getQuickSortAnimations(this.state.array);
        for (let i=0; i<animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
            setTimeout(() => {
                const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight, isSwap] = animations[i];
                if (isSwap){
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${barTwoHeight}px`;
                    barTwoStyle.height = `${barOneHeight}px`;;
                }
            }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    heapSort(){
        const animations = getHeapSortAnimations(this.state.array);
        for (let i=0; i<animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
            setTimeout(() => {
                const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight, isSwap] = animations[i];
                if (isSwap){
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${barTwoHeight}px`;
                    barTwoStyle.height = `${barOneHeight}px`;;
                }
            }, i * ANIMATION_SPEED_MS);
            }
        }
    }


    render(){
        const {array} = this.state;

        return (
            <div>
                <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                  <Navbar.Brand href="/"> Sorting Visualizer </Navbar.Brand>
                  <Nav className="mr-auto">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav.Link onClick={() => this.resetArray()}> Generate New Array </Nav.Link>
                    <Nav.Link onClick={() => this.quickSort()}> Quick Sort </Nav.Link>
                    <Nav.Link onClick={() => this.mergeSort()}> Merge Sort </Nav.Link>
                    <Nav.Link onClick={() => this.heapSort()}> Heap Sort </Nav.Link>
                    <Nav.Link onClick={() => this.bubbleSort()}> Bubble Sort </Nav.Link>
                  </Nav>
                </Container>
                </Navbar>
                <div className="array-container" ref={this.myRef}>
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: `${value}px`,
                        }}></div>
                    ))} 
                </div>   
            </div>    
        )
    }
}

function randomFromInterval(min, max){
    // Generates random numbers within a given interval
    return Math.floor(Math.random() * (max - min + 1) + min);           
}

export default SortingVisualizer;
