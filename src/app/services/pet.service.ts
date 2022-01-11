import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IPet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  apiString: string = 'https://localhost:5001/api/Pets/';
  constructor(private http: HttpClient) { }
  

  getAllPets() {
    //temporary code for populating all pets
    return this.http.get<IPet>(this.apiString);
  }

  getPetById(id: number) {
    var requestString = this.apiString + id;
    return this.http.get<IPet>(requestString);
  }

  getPets(type: string) {
    if(type == 'all') {
      return this.http.get<IPet[]>(this.apiString);
    }

    return this.http.get<IPet[]>(this.apiString + type);
  }

  getFeaturedPets() {
    //temporary code for populating featured pets
    return FEATURED_PETS;
  }
}

const PETS = [
  {
    type: 'dog',
    id: 1,
    name: 'Fluffy',
    age: 3,
    gender: 'female',
    pictures: [
      'https://purewows3.imgix.net/images/articles/2021_03/Fluffy_Dog_Breeds-Pomeranian_.jpg?auto=format,compress&cs=strip'
    ],
    bio: 'Hi, I am Fluffy',
    breed: 'Pomeranian'
  
  },
  {
    type: 'dog',
    id: 2,
    name: 'Bruce',
    age: 6,
    gender: 'male',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg'
    ],
    bio: 'Hi, I am Bruce',
    breed: 'German Shepard',
  },
  {
    type: 'dog',
    id: 3,
    name: 'Max',
    age: 1,
    gender: 'male',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/DOG-HUSKY_23JUL00.jpg/330px-DOG-HUSKY_23JUL00.jpg'
    ],
    bio: 'Hi, I am Max',
    breed: 'Husky',
  },
  {
    type: 'cat',
    id: 4,
    name: 'Mittens',
    age: 2,
    gender: 'female',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/Socks-clinton.jpg'
    ],
    bio: 'Hi, I am Mittens',
    breed: 'Tuxedo',
    isFamilyFriendly!: true,
    isDeclawed!: false
  },
  {
    type: 'cat',
    id: 5,
    name: 'Gandalf',
    age: 10,
    gender: 'male',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/IC_Blue_Melody_Flipper_CHA_male_EX1_CACIB.jpg/330px-IC_Blue_Melody_Flipper_CHA_male_EX1_CACIB.jpg'
    ],
    bio: 'Hi, I am Gandalf',
    breed: 'Chartreaux',
    isFamilyFriendly!: true,
    isDeclawed!: true
  },
  {
    type: 'cat',
    id: 6,
    name: 'Marie',
    age: 3,
    gender: 'female',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Calico_cat_phoebe.jpg/330px-Calico_cat_phoebe.jpg'
    ],
    bio: 'Hi, I am Marie. I hate children.',
    breed: 'Calico',
    isFamilyFriendly: false,
    isDeclawed: true
  },
  {
    type: 'cat',
    id: 7,
    name: 'Princess',
    age: 2,
    gender: 'female',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WhiteCat.jpg/330px-WhiteCat.jpg'
    ],
    bio: 'Hi, I am Princess. I hate children.',
    breed: 'White',
    isFamilyFriendly: false,
    isDeclawed: false
  },
  {
    type: 'bird',
    id: 8,
    name: 'Crackers',
    age: 3,
    gender: 'female',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/commons/a/aa/Sirocco_full_length_portrait.jpg'
    ],
    bio: 'Hi, I am Crackers',
    species: 'Owl Parrot'
  
  },
  {
    type: 'bird',
    id: 9,
    name: 'Wings',
    age: 7,
    gender: 'male',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Probosciger_aterrimus-20030511.jpg/330px-Probosciger_aterrimus-20030511.jpg'
    ],
    bio: 'Hi, I am Wings',
    species: 'Cockatoo',
  },
  {
    type: 'bird',
    id: 10,
    name: 'Big Bird',
    age: 9999,
    gender: 'Unkown',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Flickr_Big_Bird.jpg/225px-Flickr_Big_Bird.jpg'
    ],
    bio: 'Help',
    species: 'Unkown',
  },
  {
    type: 'reptile',
    id: 11,
    name: 'Smaug',
    age: 6211,
    gender: 'male',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Smaug_%28Peter_Jackson_Hobbit_Trilogy%29.jpg/330px-Smaug_%28Peter_Jackson_Hobbit_Trilogy%29.jpg'
    ],
    bio: 'Hi, I am Smaug',
    species: 'Fire-Drake'
  },
  {
    type: 'reptile',
    id: 12,
    name: 'Gordon',
    age: 4,
    gender: 'male',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Phelsuma_l._laticauda.jpg/330px-Phelsuma_l._laticauda.jpg'
    ],
    bio: 'Hi, I am Gordon',
    species: 'Gecko'
  },
  {
    type: 'other',
    id: 13,
    name: 'Mark',
    age: 37,
    gender: 'male',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
    ],
    bio: 'I am the human being known as Mark',
  }
]

const FEATURED_PETS = [
{
  type: 'dog',
  id: 2,
  name: 'Bruce',
  age: 6,
  gender: 'male',
  pictures: [
    'https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg'
  ],
  bio: 'Hi, I am Bruce',
  breed: 'German Shepard',
},
{
  type: 'cat',
  id: 5,
  name: 'Gandalf',
  age: 10,
  gender: 'male',
  pictures: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/IC_Blue_Melody_Flipper_CHA_male_EX1_CACIB.jpg/330px-IC_Blue_Melody_Flipper_CHA_male_EX1_CACIB.jpg'
  ],
  bio: 'Hi, I am Gandalf',
  breed: 'Chartreaux',
  isFamilyFriendly: true,
  isDeclawed: true
},
{
  type: 'cat',
  id: 6,
  name: 'Marie',
  age: 3,
  gender: 'female',
  pictures: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Calico_cat_phoebe.jpg/330px-Calico_cat_phoebe.jpg'
  ],
  bio: 'Hi, I am Marie. I hate children.',
  breed: 'Calico',
  isFamilyFriendly: false,
  isDeclawed: true
},
{
  type: 'cat',
  id: 7,
  name: 'Princess',
  age: 2,
  gender: 'female',
  pictures: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WhiteCat.jpg/330px-WhiteCat.jpg'
  ],
  bio: 'Hi, I am Princess. I hate children.',
  breed: 'White',
  isFamilyFriendly: false,
  isDeclawed: false
},
]
