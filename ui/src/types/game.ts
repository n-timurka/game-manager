import { type Team } from './team'

export type Game = {
  id: number
  h: Team
  a: Team
  datetime: string
  hScore?: number
  aScore?: number
}
