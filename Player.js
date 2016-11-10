class Player {
  constructor() {
    this.directions = ['forward', 'left', 'right', 'backward']
  }
  checkSurroundings(warrior) {
    const surroundingsReducer = (acc, direction) => acc[direction] = warrior.feel(direction)
    const surroundings = this.directions.reduce(surroundingsReducer, new Set())

    return surroundings
  }
  act(space){
    switch space {
      case space.isEmpty():
        return warrior => warrior.walk()
    }

  }
  playTurn(warrior) {
    const surroundings = checkSurroundings(warrior)
    const surroundings.prioritize()

    const actions = surroundings.map(this.act)
    actions.map(action => action(warrior))
  }
}
