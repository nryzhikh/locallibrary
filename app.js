require('dotenv').config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const connectDB = require("./config/db");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog");
const compression = require("compression");
const helmet = require("helmet");

const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});



const app = express();

connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const hbs = require('hbs');

hbs.registerHelper('eq', function(a, b) {
    return a === b;
});
hbs.registerHelper('equal', function(arg1, arg2) {
  return (arg1.toString() === arg2.toString())
});
hbs.registerHelper('isGenreChecked', function (currentGenreId, bookGenres) {
  // Convert current genre ID to string for comparison
  const currentGenreIdStr = currentGenreId.toString();
  // Check if the current genre is included in the book's genres
  return bookGenres.some(genre => genre._id.toString() === currentGenreIdStr) ? 'checked' : '';
});

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);
app.use(limiter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression()); // Compress all routes
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/catalog", catalogRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
