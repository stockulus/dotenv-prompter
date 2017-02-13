#!/usr/bin/env node
'use strict'

const fs = require('fs')
const prompt = require('prompt')

const envFile = './.env'
const schemaFile = './.env.json'

const parse = source => {
  const result = {}

  source.split('\n').forEach(function (line) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
    if (match != null) {
      result[match[1]] = match[2]
    }
  })

  return result
}

if (!fs.existsSync(schemaFile)) {
  console.log(`"${schemaFile}" does not exist`)
  process.exit(1)
}

const schema = {
  properties: JSON.parse(fs.readFileSync(schemaFile, 'utf8'))
}

const currentEnv = fs.existsSync(envFile)
  ? parse(fs.readFileSync('./.env', 'utf8'))
  : {}

prompt.override = Object.keys(schema.properties).reduce((result, key) => {
  if (currentEnv[key]) {
    const type = schema.properties[key].type

    if (type === 'integer') {
      result[key] = parseInt(currentEnv[key], 10)
    } else if (type === 'number') {
      result[key] = Number.parse(currentEnv[key])
    } else if (type === 'boolean') {
      result[key] = currentEnv[key] === 'true'
    } else {
      result[key] = currentEnv[key]
    }
  }
  return result
}, {})
prompt.start()

prompt.get(schema, (error, result) => {
  if (error) return console.error(error)

  fs.writeFileSync('./.env',
    Object.keys(result).reduce((content, key) => {
      return content + `${key}=${result[key]}\n`
    }, '')
  )
})
