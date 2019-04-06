export const people = [
  {
    id: 0,
    name: "Me",
    age: 18,
    gender: "male"
  },
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: 2,
    name: "Daal",
    age: 18,
    gender: "female"
  },
  {
    id: 3,
    name: "JD",
    age: 18,
    gender: "female"
  },
  {
    id: 4,
    name: "moondaddi",
    age: 18,
    gender: "female"
  },
  {
    id: 5,
    name: "flynn",
    age: 18,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id == id);
  return filteredPeople[0];
};
