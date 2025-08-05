export class PlayerDto {
  id: number;
  playerFaceUrl: string;
  name: string;
  club: string;
  position: string;
  nationality: string;
  rating: number;
  speed: number;
  shooting: number;
  dribbling: number;
  passing: number;
  defending: number;
  physic: number;
  heightCm: number;
  weightKg: number;
  age: number;
  preferredFoot: string;
  fifaVersion: number;
  fifaUpdate: number;

  constructor(partial: Partial<PlayerDto>) {
    Object.assign(this, partial);
  }
}
