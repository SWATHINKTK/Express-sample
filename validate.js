module.exports = function validate(req,res,next)
{
    if(req.token)
    {
        console.log("validate");
        res.send("<h1>Sucess</h1>")
        return ;
        next();
    }
    else
    {
        console.log("validation Failed");
        next();
    }
}

