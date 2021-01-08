const errorHandlers = (error, req, res, next) => {
  if (error) {
    // bsa custom return error sendiri ya, kirim object next({name:'namaErrornya'})
    switch (error.name) {
      // handle error dri validasi attribut model
      case "SequelizeValidationError":
        let msg = error.errors.map((err) => err.message)
        res.status(400).json({msg})
        break;

      // handle error dari jwswebtoken
      case "JsonWebTokenError":
        res.status(404).json({msg:error})
        break;

      // handle error dari contraint unique (email)
      case 'SequelizeUniqueConstraintError':
          res.status(404).json({msg:`${err.errors[0].value} already exists`})
          break;

      // sisa nya custom error
      case "errorAuth":
        res.status(401).json({msg: 'Invalid email / password!'})
        break;

      case "notAuthorize":
        res.status(403).json({msg: 'You do not have permission!'}) //Forbidden Error (have token but cant access data)
        break;

      case "loginFirst":
        res.status(401).json({msg: 'Please login first!'}) //UnauthorizedError (dont have token)
        break;

      case "notFound":
        res.status(404).json({msg: 'Not found!'})
        break;

      case "internalError":
        res.status(500).json({msg: 'Internal Server Error!'})
        break;

      case "cantRetrieve":
        res.status(500).json({msg: 'Cannot retrieve data!'})
        break;

      default:
        res.status(500).json({msg: 'Something went wrong!'})
        break;
    }
  }
}

module.exports = {errorHandlers}