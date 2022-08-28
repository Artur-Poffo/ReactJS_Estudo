import React, { useEffect, useState } from "react";

function Counter(props) {
    
    const [count, setCount] = useState(props.count)

    useEffect(() => {
        setCount(Number(localStorage.getItem("count")))
    }, [])

    useEffect(() => {
        document.title = count
        localStorage.setItem("count", JSON.stringify(count))
    }, [count])

    function add() {
        setCount(count + 1)
    }

    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={add} >Add</button>
        </div>
    )
}

// class Counter extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = { count: 0 }
//         this.add = this.add.bind(this)
//     } 

//     add() {
//         this.setState((state) => { return { count: state.count + 1 } }, () => {
//             localStorage.setItem("state", JSON.stringify(this.state))
//         })
//     }

//     componentDidMount() {
//         this.setState(JSON.parse(localStorage.getItem("state")))
//     }

//     render() {
//         return (
//             <main>
//                 <h3>Counter: {this.state.count}</h3>
//                 <button onClick={this.add} >Add</button>
//             </main>
//         )
//     }
// }

export default Counter