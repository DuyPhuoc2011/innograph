import { GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

const api = new GraphQLObjectType({
  name: apiItem,
  fields:()=>({
    name : {
      type: String
    }
  })
});

const Group = new GraphQLObjectType({
  name: 'Childs',
  fields:()=>({
    id:{
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    childs: {
      type: new GraphQLList(api)
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
      type: new GraphQLList(Group)
    }
  })
});
