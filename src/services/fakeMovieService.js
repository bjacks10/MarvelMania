import CaptainAmericaTheFirstAvenger from "../images/CaptainAmericaTheFirstAvenger.jpg";
import CaptainMarvel from "../images/CaptainMarvel.jpg";
import IronMan from "../images/IronMan.jpg";
import IronMan2 from "../images/IronMan2.jpg";
import TheIncredibleHulk from "../images/TheIncredibleHulk.jpg";

const movies = 
[{
    "_id": "1",
    "title": "Captain America: The First Avenger" ,
    "phase": "Phase 1",
    "order": 1,
    "characters": ["Captain America", " Bucky Barnes"],
    "runtime": 124,
    "releaseYear": "2011",
    "description": "Marvel's Captain America: The First Avenger focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.",
    "liked": true,
    "picture": CaptainAmericaTheFirstAvenger
},
{
    "_id": "2",
    "title": "Captain Marvel" ,
    "phase": "Phase 3",
    "order": 2,
    "characters": ["Captain Marvel"],
    "runtime": 123,
    "releaseYear": "2019",
    "description": "Set in the 1990s, Marvel Studios’ “Captain Marvel” is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe’s most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.",
    "liked": true,
    "picture": CaptainMarvel
},
{
    "_id": "3",
    "title": "Iron Man" ,
    "phase": "Phase 1",
    "order": 3,
    "characters": ["Iron Man"],
    "runtime": 126,
    "releaseYear": "2008",
    "description": "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
    "liked": true,
    "picture": IronMan
},
{
    "_id": "4",
    "title": "Iron Man 2" ,
    "phase": "Phase 1",
    "order": 4,
    "characters": ["Iron Man, War Machine, Black Widow"],
    "runtime": 124,
    "releaseYear": "2010",
    "description": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and 'Rhodey' Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "liked": true,
    "picture": IronMan2
},
{
    "_id": "5",
    "title": "The Incredible Hulk" ,
    "phase": "Phase 1",
    "order": 5,
    "characters": ["The Hulk"],
    "runtime": 112,
    "releaseYear": "2008",
    "description": "In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: Hulk. Living in the shadows--cut off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk.",
    "liked": true,
    "picture": TheIncredibleHulk
}];

export function getMovies() {
    return movies;
  }

export function getLiked(){
    const faves = movies.filter(m => m.liked === true);
    return faves;
}
  
export function getMovie(id) {
    return movies.find(m => m._id === id);
  }