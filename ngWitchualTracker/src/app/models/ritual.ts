
export class Ritual {

id: number;
name: string;
properties: string;
intentions: string;
words: string;
ingredients: string;
instructions: string;
idealtime: string;

constructor(id: number = 0, name: string = "", properpties: string = "",
intentions: string = "", properties: string = "", words: string = "",
ingredients: string = "", instructions: string = "",
idealtime: string = "") {
  this.id = id;
  this.name = name;
  this.properties = properpties;
  this.intentions = intentions;
  this.words = words;
  this.ingredients = ingredients;
  this.instructions = instructions;
  this.idealtime = idealtime;
}
}


