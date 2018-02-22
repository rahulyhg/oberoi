var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    schoolCollege: {
        type: Schema.Types.ObjectId,
        ref: 'SchoolCollege'
    },
    Module: {
        type: Schema.Types.ObjectId,
        ref: 'Module'
    }
});

schema.plugin(deepPopulate, {
    Populate: {
        'schoolCollege': {
            select: '_id name'
        },
        'Module': {
            select: '_id name'
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Atheletics', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "schoolCollege Module", "schoolCollege Module"));
var model = {};
module.exports = _.assign(module.exports, exports, model);