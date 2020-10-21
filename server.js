const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const addStoreRoute = require('./routes/stores/addStore')
const getStoreRoute = require('./routes/stores/getStore')
const addInventoryRoute = require('./routes/inventory/addInventory')
const getInventoryRoute = require('./routes/inventory/getInventory')
const addGoodsRoute = require('./routes/goods/addGoods')
const getGoodsRoute = require('./routes/goods/getGoods')

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(addStoreRoute)
app.use(getStoreRoute)
app.use(addInventoryRoute)
app.use(getInventoryRoute)
app.use(addGoodsRoute)
app.use(getGoodsRoute)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
