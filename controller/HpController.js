const ph = {
    nom: (req, res) => {
        res.render('index');
    },

    about: (req, res) => {
        res.render('about');
    },

    contact: (req, res) => {
        res.render('contact');
    },

    services:(req, res) => {
        res.render('services');
    },
    projects:(req, res) => {
        res.render('projects');
    },
//page 2
    lans: (req, res) => {
        res.render('2index');
    },
    about2: (req, res) => {
        res.render('2about');
    },
    pracarea2:(req, res) => {
        res.render('2pracarea');
    },
    attorney2: (req, res) => {
        res.render('2attorney');
    },
    contact2: (req, res) => {
        res.render('2contact');
    }
};


module.exports = ph;
