const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB

mongoose.connect('mongodb://localhost/pcat-test-db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//creat Schema

const PhotoSchema = new Schema({

  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo

/* Photo.create({
  title: 'Photo Title 1',
  description: 'photo description 1',
}); */
/* 
Photo.find({},(err,data)=>{
    console.log(data)
}) */

const id="618197f56a0665b1b97eb189"

Photo.findByIdAndUpdate(

    id,{
        title:"Pgoroasd",
        description:"asdasda"
    },
    {new:true},
    (err,data)=>{
        console.log(data)
    }
)