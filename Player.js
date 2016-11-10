class Player {
  constructor() {
    this.directions = ['forward', 'left', 'right', 'backward']
  }
  checkSurroundings(warrior) {
    const surroundingsReducer = (set, direction) => set.add(warrior.feel(direction))
    const surroundings = this.directions.reduce(surroundingsReducer, new Set())

    return surroundings
  }
  action(direction, space){
    switch space {
      case space.isEmpty():
        return warrior => warrior.walk(direction)
      case space.isEnemy():
        return warrior => warrior.attack(direction)
      case space.isWall():
      case space.isTicking():
        return null
    }

  }
  playTurn(warrior) {
    const surroundings = checkSurroundings(warrior)
    const surroundings.prioritize()

    const actions = surroundings.map(space => this.action(direction, space))
    actions.map(act => act(warrior)())
  }
}
