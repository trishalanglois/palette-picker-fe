export const palettes = (state = [], action) => {
  console.log(action.palettes)
    switch (action.type) {
      case 'ADD_PALETTES': 
        return action.palettes
      default: 
        return state
    }
  }