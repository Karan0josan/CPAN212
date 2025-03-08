const logger = (req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(Date());
    next(); // this is what allows the request to continue to the next middleware or route handler(it is like return to exit the function)
};

export default logger;