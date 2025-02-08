export interface Students {
    id: string;
    name: string;
    alternate_names: string[];
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: string;
    wizard: string;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: WandCharacter;
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternate_actors: string[];
    alive: boolean;
    image: string;
  }
  
  interface WandCharacter {
    wood: string;
    core: string;
    length: string;
  }