const baseConvert = require('baseconvert');

function convertBase(number, fromBase, toBase){
	return baseConvert.converter(number).fromBase(fromBase).toBase(toBase);
}

function validate(obj){
	return new Promise((resolve,reject)=>{
		if((obj.number && obj.from && obj.to) && (obj.from != obj.to) ){
			resolve();
		} else{
			reject();
		}
	})
}

module.exports =  {
	convertBase,
	validate
};