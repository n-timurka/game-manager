import type { TeamPlayer } from './teamPlayer'

export type Team = {
  id: number
  title: string
  slug: string
  players?: TeamPlayer[]
}
