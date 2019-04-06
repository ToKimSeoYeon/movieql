import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id)
    // 여기서 _ 는 변수 이름 겉운고
  }
};

export default resolvers;
