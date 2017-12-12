import { GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

new GraphQLObjectType({
  name: "Childs",
  fields:()=>({
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    childs:{
      type: new GraphQLList(Childs)
    }
  })
});

// define type for apis
export default new GraphQLObjectType({
  name :'Api',
  fields: () =>({
    id: {
      type : new GraphQLNonNull(GraphQLID)
    },
    name : {
      type: new GraphQLNonNull(GraphQLString)
    },
    childs: {
      type: new GraphQLList(Childs)
    }
  })
});
