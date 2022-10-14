var mongoose = require(`mongoose`)
var Schema = mongoose.Schema;
var bcrypt = require(`bcrypt`)


var articleSchema = new Schema({
    title:String,
    description: String,
    tags: [ String]
})

articleSchema.index({ tags : 1});

articleSchema.index({ title: "text", description: "text"})



module.exports = mongoose.model("Article", articleSchema)