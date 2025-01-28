import express from "express";
/*name
greet
add
calculate */


const router = express.Router();

//checking if in route
router.get("/", (req, res)=>{
    res.send("Welcome to the lab")
})
//name route
router.get("/name", (req, res)=>{
    res.send("Karanjeet Josan")
})

//greeting
router.get("/greeting", (req, res)=>{
    res.send("Hello from Karanjeet Josan, N01187966")
})

//add
router.get("/add/:x/:y", (req, res)=>{
    let x = parseFloat(req.params.x)
    let y = parseFloat(req.params.y)

    // x = parseFloat(x)
    // y = parseFloat(y) 
    res.send(`${x+y}`)
})

//calculte
router.get("/calculate/:a/:b/:operation", (req, res)=>{
    let a = parseFloat(req.params.a)
    let b = parseFloat(req.params.b)
    let operation = req.params.operation
    let result = 0;
    switch (operation) {
        case "+":
            result = a+b;
            break;
        case "-":
             result = a-b;
             break;
        
        case "*":
            result = a*b;
            break;

        case "/":
            if (b==0) {
                res.send("Can not divide by 0")
                break;
            }else{
                result = a/b;
                break;
            }
        default:
            res.send("Invalid Operator")
            break;
    }
    res.send(`${result}`);
})



export default router;
