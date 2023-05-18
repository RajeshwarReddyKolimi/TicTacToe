import React, { useState } from "react";
import "./style1.css";
let count = 0;
let history = [
    [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ],
    [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ],
    [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ],
    [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ],
    [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ],
    [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ],
    [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ],
    [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ],
    [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ],
    [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
];
let visHistory = [
    [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ],
    [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ],
    [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ],
    [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ],
    [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ],
    [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ],
    [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ],
    [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ],
    [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ],
    [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
];
export default function Game() {
    const [turn, setTurn] = useState(1);
    const [vis, setVis] = useState([
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]);
    const [value, setValue] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]);
    const [winner, setWinner] = useState(-1);
    function restart() {
        count = 0;
        setWinner(-1);
        history = [
            [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ]
        ];
        visHistory = [
            [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ],
            [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ],
            [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ],
            [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ],
            [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ],
            [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ],
            [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ],
            [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ],
            [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ],
            [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ]
        ];
        setValue(history[0]);
        setVis(visHistory[0]);
        setTurn(1);
    }
    function undo() {
        if (count > 1) {
            setWinner(-1);
            history[count] = [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ];
            visHistory[count] = [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ];
            count--;
            setValue(history[count]);
            setVis(visHistory[count]);
            setTurn(turn === 1 ? 2 : 1);
        } else {
            restart();
        }
    }
    return (
        <div>
            <h1>TicTacToe</h1>
            <Square1
                count={count}
                value={value}
                setValue={setValue}
                vis={vis}
                setVis={setVis}
                turn={turn}
                setTurn={setTurn}
                winner={winner}
                setWinner={setWinner}
            />
            <h3>
                {winner !== -1
                    ? "Player " + winner + " wins"
                    : "Player " + turn + " turn"}
            </h3>
            <button onClick={restart}>Restart</button>
            <button onClick={undo}>Undo</button>
        </div>
    );
}

function Square1(props) {
    return (
        <div className="square">
            <div className="row">
                <Box
                    id={[0, 0]}
                    count={props.count}
                    value={props.value}
                    setValue={props.setValue}
                    vis={props.vis}
                    setVis={props.setVis}
                    turn={props.turn}
                    setTurn={props.setTurn}
                    winner={props.winner}
                    setWinner={props.setWinner}
                />
                <Box
                    id={[0, 1]}
                    count={props.count}
                    value={props.value}
                    setValue={props.setValue}
                    vis={props.vis}
                    setVis={props.setVis}
                    turn={props.turn}
                    setTurn={props.setTurn}
                    winner={props.winner}
                    setWinner={props.setWinner}
                />
                <Box
                    id={[0, 2]}
                    count={props.count}
                    value={props.value}
                    setValue={props.setValue}
                    vis={props.vis}
                    setVis={props.setVis}
                    turn={props.turn}
                    setTurn={props.setTurn}
                    winner={props.winner}
                    setWinner={props.setWinner}
                />
            </div>
            <div className="row">
                <Box
                    id={[1, 0]}
                    count={props.count}
                    value={props.value}
                    setValue={props.setValue}
                    vis={props.vis}
                    setVis={props.setVis}
                    turn={props.turn}
                    setTurn={props.setTurn}
                    winner={props.winner}
                    setWinner={props.setWinner}
                />
                <Box
                    id={[1, 1]}
                    count={props.count}
                    value={props.value}
                    setValue={props.setValue}
                    vis={props.vis}
                    setVis={props.setVis}
                    turn={props.turn}
                    setTurn={props.setTurn}
                    winner={props.winner}
                    setWinner={props.setWinner}
                />
                <Box
                    id={[1, 2]}
                    count={props.count}
                    value={props.value}
                    setValue={props.setValue}
                    vis={props.vis}
                    setVis={props.setVis}
                    turn={props.turn}
                    setTurn={props.setTurn}
                    winner={props.winner}
                    setWinner={props.setWinner}
                />
            </div>
            <div className="row">
                <Box
                    id={[2, 0]}
                    count={props.count}
                    value={props.value}
                    setValue={props.setValue}
                    vis={props.vis}
                    setVis={props.setVis}
                    turn={props.turn}
                    setTurn={props.setTurn}
                    winner={props.winner}
                    setWinner={props.setWinner}
                />
                <Box
                    id={[2, 1]}
                    count={props.count}
                    value={props.value}
                    setValue={props.setValue}
                    vis={props.vis}
                    setVis={props.setVis}
                    turn={props.turn}
                    setTurn={props.setTurn}
                    winner={props.winner}
                    setWinner={props.setWinner}
                />
                <Box
                    id={[2, 2]}
                    count={props.count}
                    value={props.value}
                    setValue={props.setValue}
                    vis={props.vis}
                    setVis={props.setVis}
                    turn={props.turn}
                    setTurn={props.setTurn}
                    winner={props.winner}
                    setWinner={props.setWinner}
                />
            </div>
        </div>
    );
}

function Box(props) {
    let visited = props.vis;
    let values = props.value;
    let x = props.id[0];
    let y = props.id[1];
    function clickHandle() {
        if (props.vis[x][y] === false && props.winner === -1) {
            count++;
            visited[x][y] = true;
            props.setVis(visited);
            if (props.turn === 1) {
                values[x][y] = "X";
                props.setValue(values);
                props.setTurn(2);
            } else if (props.turn === 2) {
                values[x][y] = "O";
                props.setValue(values);
                props.setTurn(1);
            }
            history[count] = values.map(function (arr) {
                return arr.slice();
            });
            visHistory[count] = visited.map(function (arr) {
                return arr.slice();
            });
            console.log(history);
            props.setWinner(validate1(values) ? props.turn : -1);
        }
    }
    return (
        <div className="box" onClick={clickHandle}>
            {props.value[x][y]}
        </div>
    );
}

function validate1(values) {
    for (var i = 0; i < 3; i++) {
        if (
            values[i][0] !== "" &&
            values[i][0] === values[i][1] &&
            values[i][0] === values[i][2]
        ) {
            return true;
        }
    }
    for (var i = 0; i < 3; i++) {
        if (
            values[0][i] !== "" &&
            values[0][i] === values[1][i] &&
            values[0][i] === values[2][i]
        ) {
            return true;
        }
    }
    if (
        values[0][0] !== "" &&
        values[0][0] === values[1][1] &&
        values[0][0] === values[2][2]
    ) {
        return true;
    }
    if (
        values[0][2] !== "" &&
        values[0][2] === values[1][1] &&
        values[0][2] === values[2][0]
    ) {
        return true;
    }
    return false;
}
