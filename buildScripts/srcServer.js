import express from 'express';
import path from 'path';
import open from'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/*   eslint-disable no-console */

const port = 3000;
const app = express();      // instance de express..
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

    // an end point that returns users data..
  app.get('/users', function(req, res){
    // Hard code for simplicity. Pretends this hits a database..
    res.json([
      {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@yahoo.com"},
      {"id": 2, "firstName": "Paul", "lastName": "Tcha'a", "email": "paultchaa@gmail.com"},
      {"id": 3, "firstName": "Tina", "lastName": "Lee", "email": "tina.lee@hotmail.com"}
    ]);
  });


// we want to say to express which root it should handle..

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+ port);
  }
});
