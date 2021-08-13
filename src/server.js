const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 4000;

app.use(cors());

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Views path
app.set('views', path.join(__dirname, 'views'))

// Set template engine
app.engine('.hbs', exphbs({ extname: '.hbs', layout: 'main.hbs' }));
app.set('view engine', '.hbs');

// Serve Home page
app.get('/', (req, res) => {
    res.render('login');
});

// Routes Array
const routes = [
    'home',
    'medicamentos',
    'farmacias',
    'registro',
    'login',
    'medicos',
    'pacientes',
    'recipes'
]

// Require routes
const setRoute = routes => {
    routes.forEach(route => {
        app.use(`/${route}`, require(`./routes/${route}`));
    })
}

setRoute(routes);

// Init server
app.listen(PORT, () => console.log(`App running on port ${PORT}`));