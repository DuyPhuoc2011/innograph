import { GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType
} from 'graphql';

// define type for apis
var apiType = new GraphQLObjectType({
  name :'Api',
  fields: () =>({
    id: {
      type : new GraphQLNonNull(GraphQLID)
    },
    name : {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
});

export default apiType;
