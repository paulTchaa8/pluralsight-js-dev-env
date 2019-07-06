import express from 'express';
import path from 'path';
import open from'open';
import compression from 'compression';

/*   eslint-disable no-console */

const port = 3000;
const app = express();      // instance de express..

app.use(compression());
app.use(express.static('dist'));

// we want to say to express which root it should handle..
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

    // an end point that returns users data..
  app.get('/users', function(req, res){
    // Hard code for simplicity. Pretends this hits a database..
    res.json([
      {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@yahoo.com"},
      {"id": 2, "firstName": "Paul", "lastName": "Tcha'a", "email": "paultchaa@gmail.com"},
      {"id": 3, "firstName": "Tina", "lastName": "Lee", "email": "tina.lee@hotmail.com"}
    ]);
  });


app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+ port);
  }
});
