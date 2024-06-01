const {readFile,writeFile}= require('fs')
console.log('start');
// call back function in pink, erris error,utf8=is encoding
readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err);
    return;
  }
  const first=result
  readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
      console.log(err);
      return;
    }
    const second=result
    writeFile('./content/result-async.txt',
      `here is the result: ${first},${second}`,
      (err,result)=>{
       if(err){
        console.log(err)
        return;
       } 
      //  console.log(result)
      console.log('done with this task');
      }
    )
    })
})
console.log('starting with next task');

/*<Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65> if we dont write UTF8 */
