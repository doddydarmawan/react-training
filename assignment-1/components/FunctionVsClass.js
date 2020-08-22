import React, { useState, useEffect, Component } from "react";
import '../index.css';

function FunctionComponent(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(5);
  const [str, setStr] = useState(null);
  //props.title = "coba ganti ah";
  // function  CustomButton(props) {
  //   <button onClick={() => props.handleClick()}>
  //       Click me
  //   </button>
  // }

  function updateCount() {
    setCount(count + 1);
  }

  // use effect
  useEffect(() => {
    console.log('mount component');

    return function cleanup() {
      console.log('unmount component');
    }
  }, [])

  useEffect(() => {
    console.log('count updated: ', count);
    console.log('count updated: ', count2);
  }, [count, count2])

  return (
    <>
    <style jsx="true">{`
        .bg-yellow {
          background-color: yellow;
        }
      `}</style>
      <h1 className="red-font">{props.title}</h1>
      <h2
        style = {{
          color:"red"
        }}
      >{props.description}</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <p className="bg-yellow">You clicked {count2} times</p>
      <button onClick={() => setCount2(count2 + 1)}>
        Click me
      </button>

      <p>You clicked {count2} times</p>
      <button onClick={() => updateCount()}>
        Click me
      </button>

      <p>You string is {str}</p>
      <button onClick={() => setStr(str+ ' abcde')}>
        Click me
      </button>

    </>
  )
}

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: this.props.initialCount,
      count2: 2
    };
    this.setCount = this.setCount.bind(this);
  }
  setCount() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  initCount() {
    this.setState(state => {
      return {
        count2: state.count2 + 1
      }
    });
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setCount()}>
          Click me
        </button>

        <p>You clicked {this.state.count2} times</p>
        <button onClick={() => this.initCount()}>
          Click me
        </button>
      </>
    );
  }
}

function FunctionVsClass() {
  return (
    <div className="App">
      <FunctionComponent title="Belajar Function Component" description="Sedang belajar react hari pertama"/>
      <hr />
      <ClassComponent title="Belajar Class Component" initialCount={4}/>
    </div>
  );
}

export default FunctionVsClass;
