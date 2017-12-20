import { GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';


const Childs = new GraphQLObjectType({
  name: 'Childs',
  fields:()=>({
    id:{
      type: new GraphQLNonNull(GraphQLID)
    },
    uid: {
      type : new GraphQLNonNull(GraphQLString)
    },
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
      resolve(root, params,{ ctrl }, api){
        console.log(api);
        ctrl.api.listGroup();
      }
    }
  })
});
export default Api;
