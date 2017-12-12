import { GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

const ChildsType = new GraphQLObjectType({
  name: 'Childs',
  fields:()=>({
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    childs: {
      type: new GraphQLList(ChildsType),
      resolve: ()=>{
        return this.find().exec();
      }
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
      type: new GraphQLList(ChildsType)
    }
  })
});
