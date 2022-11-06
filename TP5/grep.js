const { readFileSync, readdirSync, lstatSync } = require("fs");

function searching(path, exp) {
    try {
        if (path.toLowerCase().endsWith("")) {
            let file = readFileSync(path, "utf-8");
            if (file.search(exp) != -1) return true
        }
        return false
    } catch (err) {
        return false
    }
}




function dirsearch(path, exp) {
    try {
        let dirfiles = readdirSync(path);
        let res = [] ;
        dirfiles.forEach((file) => {
            let state = lstatSync(path + "/" + file);
            if (state.isDirectory()) {
                let dirRes = dirsearch(path + "/" + file, exp);
                dirRes.length != 0 ? res.push(...dirRes) : null
            } else if (file.toLowerCase().endsWith("")) {
                searching(path + "/" + file, exp) ? res.push(path + "/" + file) : null
            }
        })
        return res
    } catch (err) {
        return []
    }
}




function Searchfile(exp, ...args) {
   let expr = new RegExp(exp, "i");
   let res = [];
  args.forEach((path) => {
       searching(path, expr) ? res.push(path) : null
   });
   if (res.length == 0) return "NONE"
   console.log('found in file: ')
    return res;
   
}




function Searchdir(exp, ...args) {
    let expr = new RegExp(exp, "i");
    let res = [];
    args.forEach((path) => {
        let state = lstatSync(path);
        if (path.toLowerCase().endsWith("")) {
            searching(path, expr) ? res.push(path) : null
        } else if (state.isDirectory()) {
            let dirRes = dirsearch(path, expr);
            dirRes.length != 0 ? res.push(...dirRes) : null
        }

    });

    if (res.length == 0) return "NONE"
    console.log('found in directory: ')
    return  res;
}




// EX 3

// QUESTION A

console.log(Searchfile("Hope World", "./Kounouz.txt", "./Nour.js", "./Nour.txt"));

// QUESTION B

console.log(Searchdir("search", "./Kounouz.txt", "./Nour.txt",  "./informatique"));


//by Nor el houda BRIOUA  & Kounouz HEDJILA
