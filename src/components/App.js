import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            key: 0
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.oncreatelist=this.oncreatelist.bind(this)
    }
    changeHandler = (e) => {
        this.setState({
            data:e.target.value,
            key:this.state.key +1
        })
    }
    oncreatelist=(e)=>{
        e.preventDefault()
        console.log(`Name:${this.state.data} , Key:${this.state.key}`)
    }
    render() {

        return (
            <div id="main">
                {/* Do not remove the main div */}
                <h1>Relatives List</h1>
                <div>
                    <input type="text" onChange={this.changeHandler} placeholder='Enter Relatives Name'/>
                    <button onClick={this.oncreatelist}>Add</button>
                </div>
                <div>
                    <table>
                        <th>Relatives List</th>
            <tr>
                <td key={this.state.key}>{this.state.data}</td>
            </tr>
                    </table>
                </div>
            </div>
        )
    }
}


export default App;
