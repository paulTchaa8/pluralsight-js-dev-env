import faker from "faker";
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';                 // comes with node..
import chalk from 'chalk';

jsf.extend("faker", function(){   // instanciate faker
  return faker;
})

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err){
  if(err){
    return console.log(chalk.red(err));                 // eslint-disable-line no-console
  } else {
    console.log(chalk.green("Mock data generated."));   // eslint-disable-line no-console
  }
});
