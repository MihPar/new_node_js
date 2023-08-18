const http = require("http");
const fs = require("fs");
const path = require('path')

// const PORT = process.argv || 4000


const delay = function(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve()
        }, ms)
    })
}

const readFile = function(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, function(err, data) {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const server = http.createServer(async function (req, res) {
  switch (req.url) {
    case "/":
    case "/home":
      // setTimeout(() => {
      //     res.write('Hello Node.js: ' + '3 sec')
      //     res.end()
      // }, 3000)                                     Задержка 3 секунды.

      //     let start = new Date()
      //     while(new Date() - start < 5000) {
      //     console.log(new Date() - start)
      // }
      // res.write('Hello Node.js: ' + '3 sec')
      // res.end()                                Ожидание 3 секунд.

      // const data = fs.readFileSync('pages/home.html')

    //   fs.readFile("pages/home.html", function (err, data) {
    //     if (err) {
    //       throw new Error();
    //     } else {
    //       res.write(data);
    //     }
    //     res.end();
    //   });

        const data = await readFile('pages/home.html')
        res.write(data)
        res.end()
        break        
    case "/about":
      // const newData = fs.readFileSync('pages/about.html')

    //   fs.readFile("pages/about.html", function (err, newData) {
    //     if (err) {
    //       throw new Error();
    //     } else {
    //       res.write(newData);
    //     }
    //     res.end();
    //   });

      await delay(3000)
      res.write('ABOUT COURSE')
      res.end()
      break;
    default:
        fs.readFile('pages/404.html', function(err, nextData) {
            if(err) {
                res.write(err)
            } else {
                res.write(nextData)
            }
            res.end()
        })
  }
});

server.listen(4000, '127.0.0.1', function () {
  console.log("Server was started at port localhost:4000");
});
