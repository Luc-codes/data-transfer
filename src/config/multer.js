const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'public', 'uploads'),
        filename(req, file, callback) {
            const fileName = `${new Date().getTime()}-${file.originalname}`;

            callback(null, fileName);
        }
    })
}