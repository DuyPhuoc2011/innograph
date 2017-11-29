import { GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType
} from 'graphql'

// define type for apis
export default new GraphQLObjectType({
  name : 'Api',
  fields: () =>({
    id: {
      type : new GraphQLNonNull(GraphQLID)
    },
    name : {
      type: new GraphQLNonNull(GraphQLString)
    }
  })

});
