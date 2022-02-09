const EXPRESS = require('express');
const BODYPARSER = require('body-parser');
const MULTER = require('multer');
const APP = EXPRESS();

const PORT = 3000;
const ROOTDIR = 'public';
const REL_IMAGE_DIR = '/images/';
const ABS_IMAGE_DIR = './public'+REL_IMAGE_DIR;

APP.use(EXPRESS.static(ROOTDIR));

APP.use(BODYPARSER.urlencoded({ extended: true, limit:'4MB' }));
APP.use(BODYPARSER.json({limit:'4MB'}));

const STORAGE = MULTER.diskStorage({
    destination: function(req, file, callback) {
        callback(null, ABS_IMAGE_DIR);
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    }
});

const UPLOAD = MULTER({
    storage: STORAGE
});

APP.listen(PORT, () => console.log(`Server is running on port ${PORT}`));