import { writable, derived } from "svelte/store";


// TODO: Create Night and Colors stores

export let night = writable(false);

export let colors = derived(night, ($night) => {
  if($night){
    return {
      background: '#224',
      foreground: '#eef'
    }
  } else {
    return {
      background: '#eef',
      foreground: '#224'
    }
  }
})