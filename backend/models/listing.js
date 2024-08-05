const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image:  {
        type: String,
        default: "https://unsplash.com/photos/a-woman-covering-her-face-with-her-hands-w818vRg6pdY",
        set:(v) => v ==="" ? "https://unsplash.com/photos/a-woman-covering-her-face-with-her-hands-w818vRg6pdY" :v,
    },
    types: String,
    symptoms: String,
    treatment: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;