// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const names = profileDataArgs[0];
// const github = profileDataArgs[1];
// const generatePage = (names, github) => {
//     return `
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//     </head>
  
//     <body>
//       <h1>${names}</h1>
//       <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
//   };
//   console.log(names, github);
// console.log(generatePage(names, github));
var commandLineArgs = process.argv;
console.log(commandLineArgs);