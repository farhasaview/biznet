const http = require('http'),
      rdc = {}

// generate keys
rdc.generateKeys = function(initial) {
  return new Promise((resolve) => {
    const lsKey = []

    for (let i = 0; i < initial.length; i++) {
      const itemKeys = Object.keys(initial[i])

      itemKeys.forEach((itemKey) => {
        if (!lsKey.includes(itemKey)) {
          lsKey.push(itemKey)
        }
      })
    }

    resolve(lsKey)
  })
}

// generate values
rdc.generateValues = function(initial, keys) {
  return new Promise((resolve) => {
    const lsValues = []

    for (let i = 0; i < initial.length; i++) {
      const itemValues = []

      keys.forEach((itemKey) => {
        if (initial[i][itemKey] !== undefined) {
          itemValues.push(initial[i][itemKey])
        } else {
          itemValues.push(null)
        }
      })

      lsValues.push(itemValues)
    }

    resolve(lsValues)
  })
}

// node server
http.createServer(async(req, res) => {
  const initial = [
          { username: 'ali', hair_color: 'brown', height: 1.2 },
          { username: 'marc', hair_color: 'blue', height: 1.4 },
          { username: 'joe', hair_color: 'brown', height: 1.7 },
          { username: 'zehua', hair_color: 'black', height: 1.8 },
        ],
        keys = await rdc.generateKeys(initial),
        values = await rdc.generateValues(initial, keys)

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({
    h: keys,
    d: values,
  }))
}).listen(3000)