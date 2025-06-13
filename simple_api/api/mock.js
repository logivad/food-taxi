export const users = [
  {
    id: 'hr83h29h9h9u12h9213',
    name: 'Artem',
  },
  {
    id: 'jg4985gj94',
    name: 'Andrey',
  },
  {
    id: 'asdasdoi29tu384f',
    name: 'Irina',
  },
];

export const dishes = [
  {
    id: 'd75f762a-eadd-49be-8918-ed0daa8dd024',
    name: 'Chicken tikka masala',
    price: 12,
    ingredients: ['chicken', 'rice'],
  },
  {
    id: 'c3cb8f92-a2ed-4716-92a1-b6ea813e9049',
    name: 'Naan',
    price: 3,
    ingredients: ['bread'],
  },
  {
    id: 'bd129641-c0eb-432b-84b6-8b81d2930358',
    name: 'Samosa',
    price: 8,
    ingredients: ['chicken', 'bread'],
  },
  {
    id: '25402233-0095-49ea-9939-1e67ed89ffb9',
    name: 'Margarita',
    price: 9,
    ingredients: ['bread', 'cheese', 'tomatoes'],
  },
  {
    id: '90902233-0095-49ea-9939-1e67ed89ffb9',
    name: 'Chef pizza',
    price: 10,
    ingredients: ['bread', 'cheese', 'tomatoes', 'chicken'],
  },
  {
    id: '6c02c2ce-b868-4191-b4a7-8686429f4bac',
    name: 'Flat Iron Steak',
    price: 10,
    ingredients: ['beef'],
  },
  {
    id: '99bb6fbb-e53b-4b7e-b9c2-23b63b77385d',
    name: 'Flat Iron Burger',
    price: 10,
    ingredients: ['bread', 'beef'],
  },
  {
    id: '99bfffbb-e53b-4b7e-b9c2-23b63b77385d',
    name: 'Flat Iron Burger Oceanic',
    price: 10,
    ingredients: ['bread', 'salmon'],
  },
  {
    id: '08c9ffa0-d003-4310-9e15-20978743296e',
    name: 'Cinnamon buns',
    price: 5,
    ingredients: ['bread'],
  },
  {
    id: '64a4967c-2080-4a99-9074-4655a4569a95',
    name: 'Semlor',
    price: 2,
    ingredients: ['bread', 'cream'],
  },
  {
    id: '4bc8528e-26d1-46c3-a522-8e18d10c8c84',
    name: 'Saffron bun',
    price: 4,
    ingredients: ['bread'],
  },
];

export const reviews = [
  {
    id: '53b642d7-5686-4717-a466-0640a1dee076',
    user: 'Agata',
    text: 'Best bakery',
    rating: 5,
  },
  {
    id: '53b642d7-5e86-4717-a467-abc0a1ase076',
    user: 'Kristy',
    text: 'Worst bakery',
    rating: 1,
  },
  {
    id: '53bagcd7-5e86-4717-a466-0640a1dee076',
    user: 'Sam',
    text: 'Finally! This place is amazing place for breakfast, lunch, dinner and supper',
    rating: 5,
  },
  {
    id: '53b64df7-5e86-4717-a467-abc0a1dee076',
    user: 'Rebeca',
    text: 'Meat here is extremely delicious',
    rating: 5,
  },
  {
    id: '53b622f7-5586-4717-a467-abc0htdee076',
    user: 'Василий',
    text: 'БлюдоДом превзошел все мои ожидания. Очень качественно и вкусно, я постоянный клиент',
    rating: 5,
  },
];

export const restaurants = [
  {
    id: 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2',
    name: 'Dishome',
    menu: [
      'd75f762a-eadd-49be-8918-ed0daa8dd024',
      'c3cb8f92-a2ed-4716-92a1-b6ea813e9049',
      'bd129641-c0eb-432b-84b6-8b81d2930358',
    ],
    reviews: ['53b622f7-5586-4717-a467-abc0htdee076'],
  },
  {
    id: 'bb8afbec-2fec-491f-93e9-7f13950dd80b',
    name: 'Homeslice',
    menu: [
      '25402233-0095-49ea-9939-1e67ed89ffb9',
      '90902233-0095-49ea-9939-1e67ed89ffb9',
    ],
    reviews: [],
  },
  {
    id: '982bfbce-c5e0-41a0-9f99-d5c20ecee49d',
    name: 'Fabrique',
    menu: [
      '08c9ffa0-d003-4310-9e15-20978743296e',
      '64a4967c-2080-4a99-9074-4655a4569a95',
      '4bc8528e-26d1-46c3-a522-8e18d10c8c84',
    ],
    reviews: [
      '53b642d7-5686-4717-a466-0640a1dee076',
      '53b642d7-5e86-4717-a467-abc0a1ase076',
    ],
  },
  {
    id: 'd9241927-09e1-44f3-8986-a76346869037',
    name: 'Flat Iron',
    menu: [
      '6c02c2ce-b868-4191-b4a7-8686429f4bac',
      '99bb6fbb-e53b-4b7e-b9c2-23b63b77385d',
      '99bfffbb-e53b-4b7e-b9c2-23b63b77385d',
    ],
    reviews: [
      '53bagcd7-5e86-4717-a466-0640a1dee076',
      '53b64df7-5e86-4717-a467-abc0a1dee076',
    ],
  },
];
