import fs from 'fs'
import path from 'path'
import{ fileURLToPath } from 'url';
import{ dirname} from 'path';
const _filename=fileURLToPath(import.meta.url);
const _dirname= dirname(_filename);
fs.readFile( _filename,(err,data)=>{
  console.log('data', data.toString())
})
