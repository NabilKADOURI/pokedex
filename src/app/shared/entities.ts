

export interface MangosInterface{
  title:string,
  author:string,
  genre:string,
  volumes:number,
  published:string,
  image:string,

}

export interface FormationsInterface{
  title:string,
  image:string,
  stack:string,
  description:string,
  date:string,
  place:number,
  price:string,
}

export interface PokemonInterface {
  pokedex_id:number,
  category: string,
  name: {
    fr: string,
  };
  sprites: {
    regular: string,
  };
  types: [{
    name : string,
    image: string,
  }];
  stats: {
    hp: number,
    atk: number,
    def: number,
    spe_atk: number,
    spe_def: number,
    vit: number,
  };
  
}

export interface FruitInterface {
  name: string;
  price: number;
}