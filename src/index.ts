import express from 'express'
import routes from './routes/middleware_route'

const app = express()
const port = 50113

app.use("/api", routes)

app.listen(port, ()=>{
  console.log("connecting to port .... %s", port)
  }
  )