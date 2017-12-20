import { GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';


const Childs = new GraphQLObjectType({
  name: 'Childs',
  fields:()=>({
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    childs: {
      type: new GraphQLList(GraphQLString)
    }
  })
});
// define type for apis
const Api= new GraphQLObjectType({
  name :'Api',
  fields: () =>({
    id: {
      type : new GraphQLNonNull(GraphQLID)
    },
    name : {
      type: new GraphQLNonNull(GraphQLString)
    },
    childs: {
      type: new GraphQLList(Childs),
      resolve(apis,{ ctrl }){
        const { _id }= apis;
        
      }
    }
  })
});
export default Api;
