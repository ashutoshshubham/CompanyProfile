const express = require('express');
const companyRouter = require('./routers/companyRouter')
const imageRouter = require('./routers/imageRouter')

const cors = require('cors')






const app = express();
const port = 5000;


app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use(express.json());
app.use('/company', companyRouter)
app.use('/image', imageRouter)












app.listen(port, () => {
    console.log("Server Started")
})