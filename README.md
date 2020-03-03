# Express

Express is a NodeJS module for create http requests at a specific url .

## Installation

Use the package manager [yarn](https://yarnpkg.com/getting-started) to install express.

```bash
yarn add express
```

## Usage

```nodejs
const express = require("express");
const server = express();

server.get("/url", (req, res) => { // req = request, res = response
  return res.json(array); // return array with results
});

server.post("/url", (req, res) => {
  return res.status(200).json({success: 'Post success'});
});

server.put("/url/:param", (req, res) => {
  return res.status(200).json({success: 'Edit success'});
});

server.delete("/url/:param", (req, res) => {
  return res.status(200).json({success: 'Delete success'});
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://github.com/lucasm0ura/express-nodejs-rocketseatchallengemodule01/blob/master/LICENSE)
