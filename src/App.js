import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {content: true, leftNavbar: true, rightNavbar: true}

  toggleContent = value => {
    this.setState({content: value})
  }

  toggleLeftNavbar = value => {
    this.setState({leftNavbar: value})
  }

  toggleRightNavbar = value => {
    this.setState({rightNavbar: value})
  }

  render() {
    const {content, leftNavbar, rightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent: content,
          showLeftNavbar: leftNavbar,
          showRightNavbar: rightNavbar,
          onToggleShowContent: this.toggleContent,
          onToggleShowLeftNavbar: this.toggleLeftNavbar,
          onToggleShowRightNavbar: this.toggleRightNavbar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
