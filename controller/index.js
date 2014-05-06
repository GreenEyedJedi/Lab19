var express = require('express');
var router = express.Router();

router.get('/hello', function(req, res){
    res.send('Hello, World!');
});

// subtitle values access via the header template
//router.set('subtitle', 'MusicNewz');

router.get('/lab18', function(req, res) {
      res.render('lab18');
    }
);

router.get('/lab18-content', function(req, res) {
        res.render('lab18-content');
    }
);

/* index file that links to various examples */
router.get('/', function(req, res){
    // use render instead of send, to replace the placeholders in index.ejs with the Key Value Pairs (KVP).
    res.render('index');
});

/* Example 1 - HTML Form w/o Ajax or Database Interaction */
router.get('/simpleForm', function(req, res){
    res.render('about.ejs', req.body );
});

/* Example 1 - Display form data submitted above */
router.post('/displayFormData', function(req, res) {
    res.render('displayFormData.ejs', req.body );
});



module.exports=router;