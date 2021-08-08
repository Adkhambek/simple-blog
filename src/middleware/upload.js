const multer = require('multer')
const path = require('path')

const Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, path.join(process.cwd(), 'src', 'images'));
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
const upload = multer({ storage: Storage })

module.exports = upload