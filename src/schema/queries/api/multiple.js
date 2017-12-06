import GraphQLList from 'graphql';
import GraphQLInt from 'graphql';

import apiType from '../../types/api';

export default {
  type: new GraphQLList(apiType),
  args: {
    limit : {
      name: 'limit',
      type: GraphQLInt
    }
  },
  resolve (root, params, { ctrl }){
    return ctrl.api.list(params);
  }
};
