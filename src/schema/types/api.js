import { GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

/*const Childs = new GraphQLObjectType({
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
*/
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
      type: new GraphQLList(Api),
      resolve:()=>{
        return db.apis.find({},{childs:1, _id:0});
      }
    }
  })
});
export default Api;
