export interface ITask {
    id: string;
    name: string;
    duration: number;//in minutes
    isCompleted: boolean;
}

export const defaultTask: ITask = {
    id: '',
    name: '',
    duration: 0,
    isCompleted: false
}

export const preDefTasks: Array<ITask> = [
    { id: '1', name: "Buy groceries", duration: 60, isCompleted: false },
    { id: '2', name: "Clean the house", duration: 30, isCompleted: false  },
    { id: '3', name: "Finish project report", duration: 10, isCompleted: true  }
];

const colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF"
];

export function getRandomColor(){
    return colorArray[(Math.floor(Math.random()*colorArray.length))]
}