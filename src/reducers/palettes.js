export const palettes = (state = [], action) => {
  console.log(action.palettes)
    switch (action.type) {
      case 'ADD_PALETTES': 
        return [...state, action.palettes]
      default: 
        return state
    }
  }