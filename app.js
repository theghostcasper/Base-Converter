const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const path = require('path')
const lib = require('./lib')

const app = express();


app.set('view engine', 'ejs'); //templates inside views dir.
app.use(express.static(__dirname + '/public')); //serving static.
app.use(bodyParser.urlencoded({extended: true})) //for getting request bodies.
app.use(morgan('common')); // the logger morgan.

app.get('/',(req,res)=>{
	res.render('index');
})

app.post('/',(req,res)=>{
	lib.validate(req.body)
		.then(()=>{
			let output = lib.convertBase(req.body.number,req.body.from,req.body.to );
			res.render('index', {
				output: output
			});
		})
		.catch((err)=>{
			res.render('index',{
				output: 'check what you entered idjt'
			})
		})
})





app.listen(3000,()=>{
	console.log("Server is listening on port 3000")
})