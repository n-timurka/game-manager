import type { Player } from "./player";

export type TeamPlayer = {
  player: Player;
  playerId: number;
  teamId: number;
  seasonId: number;
  stats: Record<string, number> | null;
};
