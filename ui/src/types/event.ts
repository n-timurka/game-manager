import type { Game } from './game'
import type { Player } from './player'

export enum EventType {
  GOAL = 'g',
  SUBSTITUTION = 's',
  YELLOW_CARD = 'y',
  RED_CARD = 'r',
}

export type Event = {
  id: number
  player: Player
  game: Game
  minute: number
  type: EventType
  assistent?: Player
}
