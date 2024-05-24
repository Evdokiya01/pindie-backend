function cors(req, res, next) {
    const { origin } = req.headers;
    
    if (allowedCors.includes(origin)) {
        res.header('Access-Control-Allow-Origin', '*');
    }
    
    next();
} 
const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'http://localhost:3000'
  ];

  module.exports = { cors };