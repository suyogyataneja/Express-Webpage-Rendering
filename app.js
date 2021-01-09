// CREATING A REFERENCE for express
let express = require('express')
//instance of express
let app = express();

//BODY PARSER middleware parses the data and makes it available
// under req.body property
//create reference of Body-parser
let bodyParser= require('body-parser')


let ejs = require('ejs');

//Setting APPLICATION WIDE variable

app.set('appName', 'APPLICATION')
//Setting PORT Number in EXPRESS app 
//listen to port 


app.set('port', 8080);

app.listen(app.get('port'));

//CONFUGURE the express app to handle the engine

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// ADDING BODY-PARSER TO app.js application 
app.use(bodyParser.urlencoded({

    extended:false
}))
//Main GET request

app.get('/', (req,res)=>{

    res.render("index.html", {
        applnName: app.get('appName')
    });
    res.sendFile(__dirname + '/index.html')
});

// Go to POST handler

app.post('/monash', (req,res)=>{

    res.send('Thank you for this post request')
    console.log(req.body)
})



//app.listen(8080);
