import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import defaultCtrl from './controllers';

function init(path, _app, _ctrl) {
  const app = _app || express();
  path = path || '/graphql';
  app.use(path, (req, res) => {
    const ctrl = {
      post: {
        load: (_ctrl && _ctrl.post) ? _ctrl.post.load : defaultCtrl.post.load,
        list: (_ctrl && _ctrl.post) ? _ctrl.post.list : defaultCtrl.post.list,
        create: (_ctrl && _ctrl.post) ? _ctrl.post.create : defaultCtrl.post.create,
        remove: (_ctrl && _ctrl.post) ? _ctrl.post.remove : defaultCtrl.post.remove,
        update: (_ctrl && _ctrl.post) ? _ctrl.post.update : defaultCtrl.post.update
      },
      profile: {
        load: (_ctrl && _ctrl.profile) ? _ctrl.profile.load : defaultCtrl.profile.load,
      },
      api:{
        list: (_ctrl && _ctrl.api)? _ctrl.api.list : defaultCtrl.api.list
      },
      group:{
        listGroup: _ctrl.api.listGroup
      }
    };
    graphqlHTTP({
      schema,
      graphiql: true,
      context: { ctrl }
    })(req, res);
  });
  if (!_app) app.listen(1111);

}


module.exports = {init};
