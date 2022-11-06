const {readFileSync, promises: fsPromises} = require('fs');
async function grep(exp,file) {

  try {
    const contents = await fsPromises.readFile(file, 'utf-8');

    const res = contents.includes(exp);
    if(res==true){
      console.log('found in file ',file);
    }else{
      console.log("NONE");
    }
    

    return res;
  } catch (err) {
    console.log(err);
  }
}

grep('logger' ,'./exo4.js');
