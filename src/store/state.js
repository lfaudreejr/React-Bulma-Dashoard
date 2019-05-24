import React from 'react';
import useGlobalHook from "use-global-hook"

const state = {
  color: 'blue'
}

const actions = {
  setColor (store, color) {
    store.setState({color})
  }
}

const useGlobal = useGlobalHook(React, state, actions)

export default useGlobal
