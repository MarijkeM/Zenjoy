import '../styles/index.scss';

console.log("index.js");
if (process.env.NODE_ENV === 'development') {
  require('../index.html');
  console.log("development");
}

