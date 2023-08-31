module.exports = function token(req,res,next)
{
    console.log("Token Created");
    req.token = true;
    next();
}