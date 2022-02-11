
const {body} = require('express-validator');

const validateUser = ()=>([
    body("name")
    .not()
    .isEmpty()
    .withMessage("Name should not be empty!")
    .isLength({min: 3})
    .withMessage("Name should at least have 3 characters!")
    .isString()
    .withMessage("Name should be a string!")
    ,
 body("code")
   .not().isEmpty().withMessage("Code should not be empty!")
   .isString().withMessage("Code should be a string"),
 body("active")
   .not().isEmpty().withMessage("Active should not be empty!")
   .isBoolean().withMessage("Active should be a boolean!")]
)

module.exports = validateUser;