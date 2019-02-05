import React, { PureComponent } from 'react'

const NotFound = () => (
  <div style={{margin: "1em auto", textAlign: 'center'}}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </div>
)

const Loading = () => (
  <div style={{margin: "1em auto", textAlign: 'center'}}>
    <p>Looking...</p>
  </div>
)

export default class extends PureComponent {
  state = { C: Loading }

  componentDidMount() {
    this.timer = setTimeout(() => this.setState({C: NotFound}), 500)
  }

  render() {
    const { C } = this.state
    return <C />
  }
}
