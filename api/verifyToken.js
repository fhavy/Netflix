const jwt = require('jsonwebtoken')

function verify(req, res, next) {
  const authHeader = req.headers.token
  if (authHeader) {
    const token = authHeader.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json('Token is not valid!')
      req.user = user
      next()
    })
  } else {
    return res.status(401).json('You are not authenticated!')
  }
}

// function accept(req, res, next) {
//   const authHeader = req.headers.token
//   if (authHeader) {
//     const Token = authHeader.split(` `)[2]

//     jwt.verify(Token, process.env.SECRET_KEY, (err, user) => {
//       if (err) res.status(401).json(`token is not yet verified`)
//       req.user = user
//       next()
//     })
//   }
// }

// function details(req, res, next) {
//   const authHeader = req.headers.token
//   if (authHeader) {
//     const token = authHeader.split(` `)[3]

//     jwt.verify(token, process.env.SECRET_ENV)
//   }
// }

module.exports = verify
// module.exports = accept;
