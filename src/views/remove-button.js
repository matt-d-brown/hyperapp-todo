/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const RemoveButton = ({id, actions}) =>
  <button
    class='button button-small button-outline'
    id={id}
    onclick={e => actions.remove(e)}>x
  </button>
