import {Injectable} from '@angular/core';

import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    let heroes = [
      {id: 1, name: 'Mr. Diamond'},
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    let singers: any[] = [
      {
        id: 1,
        alias_name: 'Diamond',
        real_name: 'Cương',
        latin_alias_name: 'Diamond',
        latin_real_name: 'Cuong',
        image: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/10665858_297247207147700_2698921318333012796_n.jpg?oh=7a135d951d01c94417ab251a371931c5&oe=5936D3D4',
        gender: 1,
        information: 'No',
        is_active: 1,
        identify: 'AQaxERkz'
      }, {
        id: 2,
        alias_name: 'Diamond',
        real_name: 'Cương',
        latin_alias_name: 'Diamond',
        latin_real_name: 'Cuong',
        image: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/10665858_297247207147700_2698921318333012796_n.jpg?oh=7a135d951d01c94417ab251a371931c5&oe=5936D3D4',
        gender: 1,
        information: 'No',
        is_active: 1,
        identify: 'AQaxERkz'
      }, {
        id: 3,
        alias_name: 'Diamond',
        real_name: 'Cương',
        latin_alias_name: 'Diamond',
        latin_real_name: 'Cuong',
        image: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/10665858_297247207147700_2698921318333012796_n.jpg?oh=7a135d951d01c94417ab251a371931c5&oe=5936D3D4',
        gender: 1,
        information: 'No',
        is_active: 1,
        identify: 'AQaxERkz'
      }, {
        id: 4,
        alias_name: 'Diamond',
        real_name: 'Cương',
        latin_alias_name: 'Diamond',
        latin_real_name: 'Cuong',
        image: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/10665858_297247207147700_2698921318333012796_n.jpg?oh=7a135d951d01c94417ab251a371931c5&oe=5936D3D4',
        gender: 1,
        information: 'No',
        is_active: 1,
        identify: 'AQaxERkz'
      }, {
        id: 5,
        alias_name: 'Diamond',
        real_name: 'Cương',
        latin_alias_name: 'Diamond',
        latin_real_name: 'Cuong',
        image: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/10665858_297247207147700_2698921318333012796_n.jpg?oh=7a135d951d01c94417ab251a371931c5&oe=5936D3D4',
        gender: 1,
        information: 'No',
        is_active: 1,
        identify: 'AQaxERkz'
      }, {
        id: 6,
        alias_name: 'Diamond',
        real_name: 'Cương',
        latin_alias_name: 'Diamond',
        latin_real_name: 'Cuong',
        image: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/10665858_297247207147700_2698921318333012796_n.jpg?oh=7a135d951d01c94417ab251a371931c5&oe=5936D3D4',
        gender: 1,
        information: 'No',
        is_active: 1,
        identify: 'AQaxERkz'
      },
    ];
    return {heroes, singers};
  }
}
