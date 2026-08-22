
//build and read file path

import path from "node:path"

//const filePath = projectRRoot + "/uploads" + filename // bad practice

//path.join() : uses the current separator for the current os // creates path string, not create the folder
//it does nt check whether the fie exist or not 
// /users/sushil/project/file.txt
// c:\users\sushil\project\file.txt

//process.cwd : the folder from where the node js process was started

const projextRoot = process.cwd();
console.log(projextRoot);

// /uploads/users/42/profile.photo.png
const userId = "42"
const originalName = "profile.photo.png"
const uploadFilePath = path.join(
    projextRoot, "uploads","users",userId,originalName
) 
console.log(uploadFilePath);

// final part of a path //profile.photo.png
const filename = path.basename(uploadFilePath)
const fileExtension = path.extname(uploadFilePath)
const parentFoldr = path.dirname(uploadFilePath)
console.log(filename);
console.log(fileExtension);
console.log(parentFoldr);


