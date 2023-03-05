const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   
   title : {
    type:String,
    required:true,
    trim:true  
   },

   price : {
       type:Number,
       required:true,
       trim:true
   },
   category : {
       type:String,
       required:true
   },
   image : {
       type:Object,
       required:true
   }



},
{timestamps:true}
)

module.exports = mongoose.model("Products",productSchema);