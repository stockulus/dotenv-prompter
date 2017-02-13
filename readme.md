[![bitHound Overall Score](https://www.bithound.io/github/stockulus/dotenv-prompt/badges/score.svg)](https://www.bithound.io/github/stockulus/dotenv-prompt) [![npm Package](https://img.shields.io/npm/dm/dotenv-prompt.svg)](https://www.npmjs.com/package/dotenv-prompt) [![npm Package](https://img.shields.io/npm/v/dotenv-prompt.svg)](https://www.npmjs.com/package/dotenv-prompt) [![travis-ci.org](https://travis-ci.org/stockulus/dotenv-prompt.svg)](https://travis-ci.org/stockulus/dotenv-prompt) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![license](https://img.shields.io/npm/l/dotenv-prompt.svg?maxAge=2592000)](https://opensource.org/licenses/MIT)

dotenv-prompt
======

cli Prompt for .env files

### Usage

```bash
npm install dotenv-prompt --save-dev
```

create a JSON file .env.json

```JSON
{
    "PORT": {
      "description": "Port of the app",
      "message": "Port is a required integer",
      "type": "integer",
      "required": true,
      "default": 3001
    },
    "DATABASE_HOST": {
      "description": "Database host",
      "message": "Database host is required",
      "type": "string",
      "required": true,
      "default": "localhost"
    },
    "PASSWORD": {
      "description": "The password",
      "message": "The password is required",
      "type": "string",
      "replace": "*",
      "required": true,
      "hidden": true
    }
}
```

Add to your package.json, e. g.

```JSON

"scripts": {
  "postinstall": "dotenv-prompt"
}

```

and you get an .env file in your Project. Properly exclude it via .gitignore, so every dev can have idividual .env file
---
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&maxAge=2592000)](https://twitter.com/stockulus) [![GitHub stars](https://img.shields.io/github/stars/stockulus/dotenv-prompt.svg?style=social&label=Star)](https://github.com/stockulus/dotenv-prompt)
