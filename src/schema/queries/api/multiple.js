import { GraphQLList,
        GraphQLInt
} from 'graphql';

import apiType from '../../types/api';

export default {
  type: new GraphQLList(apiType),
  args: {},
  resolve (root, params, { ctrl }){
    return ctrl.api.list(params);
  }
};
