exports.auth_check = (req, res, next) => {
  if(!req.user) {
    // User is not logged in
    res.redirect('/')
  } else {
    // User is logged in
    next()
  }
}