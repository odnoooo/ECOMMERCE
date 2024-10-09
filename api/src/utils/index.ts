// import fs from "fs";
// import path from "path";

// export const readJson =(filename)=>{
//     const filePath=path.join(__dirname, "..", "data", filename);

//     const rawData=fs.readFileSync(filePath);

//     return JSON.parse(rawData);
// };

// export saveJson=(filename, data)=>{
//     const filePath= path.join(__dirname, "..", filename);
//     fs.writeFileSync(filePath,Json.stringify(data));
// };

import fs from "fs";
import path from "path";

export const readJson = (filename: string): any => {
    const filePath = path.join(__dirname, "..", "data", filename);
    const rawData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(rawData);
};

export const saveJson = (filename: string, data: any): void => {
    const filePath = path.join(__dirname, "..", "data", filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
};
