const moongose = require('mongoose');
const Schema = moongose.Schema;

const modelSchema = new Schema(
    {
    idBook:{required :true,type:Number}
    ,title:{required: true, type: String}  
    ,author:{required: true, type: String} 
    }  
);

const model = moongose.model('Books',modelSchema);
module.exports=model;
