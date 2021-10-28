import React from 'react';

interface IState {
    s: string
  }

class CcDemo extends React.Component<{}, IState> {
  constructor(props: any){
    super(props);
    this.state = {
      s: 'test'
    }
    console.log('CC: constructor function')
  }

  public componentDidMount(){
    console.log('CC: componentDidMount')
    this.setState({
      s: 'test after mounting'
    })
  }

  public shouldComponentUpdate(_: any, nextState: IState): boolean {
    console.log("CC: shouldComponentUpdate")

    console.log('CC: ' + this.state.s, 'CC: ' + nextState.s)
    return true
  }
  public componentDidUpdate() {
    console.log('CC: componentDidUpdate ' + this.state.s)
  }

  public componentWillUnmount(){
    console.log('CC: componentWillUnmount')
    this.setState({
      s: ''
    })
  }

  public render() {
    console.log('CC: render: ' + this.state.s)
    return <div>{this.state.s}</div>
  }
}

export default CcDemo