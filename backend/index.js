const express = require('express');
const api_config = require('./config');
const app = express();
const port = api_config.port;
const userRouter = require('./routers/userManager');
const reviewRouter = require('./routers/reviewManager');
const utilRouter = require('./routers/util');
const queryRouter = require('./routers/queryManager');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/util', utilRouter);
app.use('/review', reviewRouter);
app.use('/query', queryRouter);

app.use(express.static('./uploads'))

app.listen(port, () => {
    console.log('Hurray!!!!! server started on port ' + port);
});