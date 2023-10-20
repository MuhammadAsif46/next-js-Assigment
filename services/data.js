// import fs from "fs"
// import path from "path"

// const filePath = path.join(process.cwd(),"data","data.json");

// export function getAll() {
//     const data = fs.readFileSync(filePath);
//     return JSON.parse(data);
// }
// export function getById (id){
//     // const res = await fetch("https://dummyjson.com/products/");
//     // const data = await res.json();
//     const data = getAll() ;
//     return data.find(p => p.id === Number(id));
// }