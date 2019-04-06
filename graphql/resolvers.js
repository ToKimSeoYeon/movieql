import { getMovies, getById } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
    // 여기서 _ 는 parent, 변수 이름 같은거
    // (parent, args)
  },
  Mutation: {
    //   addMovie: (_,{name,score}) =>
  }
};

export default resolvers;
