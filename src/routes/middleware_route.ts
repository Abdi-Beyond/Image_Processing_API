import express from 'express' 
import image from './api/image'
import { resolve } from 'path'
var routes = express.Router()
routes.use("/image", image)

routes.get('/', (req, res)=>{
  res.sendFile(resolve('src') + "/" + 'index.html')
})
  export default routes