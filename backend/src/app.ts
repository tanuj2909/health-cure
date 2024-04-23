import express from 'express'
import cors from 'cors'

import userRoute from './route/user.route'

const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)

app.use('api/v1/user', userRoute )

export { app }