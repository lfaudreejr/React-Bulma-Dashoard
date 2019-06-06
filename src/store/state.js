import React from 'react';
import useGlobalHook from "use-global-hook"

const state = {
  color: 'blue',
  dimension: 'fluid',
  locale: 'us'
}

const actions = {
  setColor (store, color) {
    store.setState({color})
  },
  setDimension (store, dimension) {
    // dimension = 'fluid' || 'boxed'
    store.setState({dimension})
  },
  setLocale (store, locale) {
    // locale = 'us'
    store.setState({locale})
  }
}

const useGlobal = useGlobalHook(React, state, actions)

export default useGlobal
