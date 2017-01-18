import React, { Component } from 'react'

const createComponentProxy = getComponent => {
  let CachedProxiedComponent

  const loadComponent = callback => {
    if (!CachedProxiedComponent) {
      getComponent().then(module => callback(CachedProxiedComponent = module.default))
    }
    return CachedProxiedComponent
  }

  class ComponentProxy extends Component {
    constructor(props) {
      super(props)
      this.state = { ProxiedComponent: CachedProxiedComponent }
    }

    componentDidMount() {
      if (!this.state.component) {
        loadComponent(component => this.setState({ ProxiedComponent: component }))
      }
    }

    render() {
      const { ProxiedComponent } = this.state
      if (!ProxiedComponent) {
        return <h1>Loading…</h1>
      }
      return <ProxiedComponent {...this.props} />
    }
  }

  return ComponentProxy
}

export default createComponentProxy
