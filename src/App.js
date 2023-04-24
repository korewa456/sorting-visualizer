import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { getBubbleSortAnimation } from "./algorithm/bubbleSort";
import { getQuickSortAnimation } from "./algorithm/quickSort";
import { getMergeSortAnimations } from "./algorithm/mergeSort";
import { getSelectionSortAnimation } from "./algorithm/selectionSort";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const ANIMATION_SPEED = 2;
const ARRAY_SIZE = 200;
const MAIN_COLOR = "DeepSkyBlue";
const SECONDARY_COLOR = "Tomato";
function App() {
  const [title, setTitle] = useState("Sorting Visualizer");
  const [sorting, setSorting] = useState(false);
  let tempArray = [];
  for (let i = 0; i < ARRAY_SIZE; i++) {
    tempArray.push(getRandomArbitrary(10, 600));
  }
  const [array, setArray] = useState(tempArray);

  function handleReset() {
    let tempArray = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      tempArray.push(getRandomArbitrary(10, 600));
    }
    setArray(tempArray);
  }

  function bubbleSort() {
    setSorting(true);
    setTitle("Performing Bubble Sort...");
    const animation = getBubbleSortAnimation([...array]);
    for (let i = 0; i < animation.length; i++) {
      const arrayBars = document.getElementsByClassName("bar");
      if (i % 2 == 0) {
        const [barOneIndex, barTwoIndex] = animation[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED);
      } else {
        const [barOneIndex, barOneHeight] = animation[i][0];
        const [barTwoIndex, barTwoHeight] = animation[i][1];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;

        setTimeout(() => {
          barOneStyle.backgroundColor = MAIN_COLOR;
          barTwoStyle.backgroundColor = MAIN_COLOR;
          barOneStyle.height = barTwoHeight + "px";
          barTwoStyle.height = barOneHeight + "px";
          if (i == animation.length - 1) {
            setSorting(false);
            setTitle("Sorting Visualizer");
          }
        }, i * ANIMATION_SPEED);
      }
    }
  }

  function quickSort() {
    setSorting(true);
    setTitle("Performing Quick Sort...");
    const animation = getQuickSortAnimation(
      [...array],
      0,
      [...array].length - 1,
      []
    );
    for (let i = 0; i < animation.length; i++) {
      const arrayBars = document.getElementsByClassName("bar");
      if (i % 2 == 0) {
        const [barOneIndex, barTwoIndex] = animation[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED);
      } else {
        const [barOneIndex, barOneHeight] = animation[i][0];
        const [barTwoIndex, barTwoHeight] = animation[i][1];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;

        setTimeout(() => {
          barOneStyle.backgroundColor = MAIN_COLOR;
          barTwoStyle.backgroundColor = MAIN_COLOR;
          barOneStyle.height = barTwoHeight + "px";
          barTwoStyle.height = barOneHeight + "px";
          if (i == animation.length - 1) {
            setSorting(false);
            setTitle("Sorting Visualizer");
          }
        }, i * ANIMATION_SPEED);
      }
    }
  }

  function mergeSort() {
    setSorting(true);
    setTitle("Performing Merge Sort...");
    const animation = getMergeSortAnimations([...array]);
    for (let i = 0; i < animation.length; i++) {
      const arrayBars = document.getElementsByClassName("bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animation[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : MAIN_COLOR;
        setTimeout(() => {
          console.log(color);
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animation[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (i >= animation.length - 1) {
            setSorting(false);
            setTitle("Sorting Visualizer");
          }
        }, i * ANIMATION_SPEED);
      }
    }
  }

  function selectionSort() {
    setSorting(true);
    setTitle("Performing Selection Sort...");
    const animation = getSelectionSortAnimation([...array]);

    console.log(animation);
    for (let i = 0; i < animation.length; i++) {
      const arrayBars = document.getElementsByClassName("bar");
      if (i % 2 == 0) {
        const [barOneIndex, barTwoIndex] = animation[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED);
      } else {
        const [barOneIndex, barOneHeight] = animation[i][0];
        const [barTwoIndex, barTwoHeight] = animation[i][1];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;

        setTimeout(() => {
          barOneStyle.backgroundColor = MAIN_COLOR;
          barTwoStyle.backgroundColor = MAIN_COLOR;
          barOneStyle.height = barTwoHeight + "px";
          barTwoStyle.height = barOneHeight + "px";
          if (i == animation.length - 1) {
            setSorting(false);
            setTitle("Sorting Visualizer");
          }
        }, i * ANIMATION_SPEED);
      }
    }
  }

  return (
    <div className="App">
      <div className="title-container">
        <Typography variant="h2">{title}</Typography>
      </div>

      <div className="bar-container">
        {array.map((value, idx) => (
          <div className="bar" key={idx} style={{ height: value + "px" }}></div>
        ))}
      </div>
      <div className="button-container">
        <Button
          variant="contained"
          onClick={sorting === false ? handleReset : () => {}}
        >
          Generate New Array
        </Button>
        <Button
          variant="contained"
          onClick={sorting === false ? bubbleSort : () => {}}
        >
          Bubble Sort
        </Button>
        <Button
          variant="contained"
          onClick={sorting === false ? quickSort : () => {}}
        >
          Quick Sort
        </Button>
        <Button
          variant="contained"
          onClick={sorting === false ? mergeSort : () => {}}
        >
          Merge Sort
        </Button>
        <Button
          variant="contained"
          onClick={sorting === false ? selectionSort : () => {}}
        >
          Selection Sort
        </Button>
      </div>
    </div>
  );
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default App;
