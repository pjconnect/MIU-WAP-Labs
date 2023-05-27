const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productRouter')
const cartRouter = require('./routes/cartRouter')
const authController = require('./controllers/authController')
const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', authController.login);
app.use((req, res, next) => {
    const auth = req.headers.authorization;
    // console.log();
    const token = auth.split(' ')[1]
    if(token === 'null'){
        res.json({error: 'No Access Token'});
    } else {
        req.user = token.split('-')[0];
        next();
    }
})

app.use('/products', productRouter);
app.use('/cart', cartRouter);




app.use((error, req, res, next)=>{
    res.status(500).json({error: error.message});
})


app.listen(3000, () => console.log('listening to 3000...'));
