import express from "express";
import Book from "../models/book.js"; //this is essentially db.books.function()

const router = express.Router();
//1 - fetch all
router.get("/", (req, res) => {
  Book.find().then((results) => {
    res.json(results); //since it is a fetch call, we do promise
  }); // ->"db.books"
});

//2 - fetch by id
router.get("/:id", (req, res) => {
  Book.findByid(req.params.id).then((results) => {
    res.json(results);
  });
});
//3. serach
router.get("/search", (req, res) => {
  const filters = {};
  //query
  //title
  if (req.query.title) {
    filters.title = req.query.title;
  }
  //pages
  if (req.query.pages) {
    let pages = parseInt(req.query.pages);
    if (req.query.logicalOperators) {
      switch (req.query.logicalOperators) {
        case gte:
          filters.pages = { $gte: { pages } };
          break;

        case lte:
          filters.pages = { $lte: { pages } };

        default:
          break;
      }
    }
  }
  Book.find(filters).then((results) => {
    res.json(results);
  });
});

//4 - update
router.put("/:id", (req, res) =>{
    Book.findByIdandUpdate(req.params.id)
    .then(()=>{
        res.json({message:"update successful"})
    })
})

//5 - delete
router.delete("/:id", (req, res) =>{
    Book.findByIdandDelete(req.params.id)
    .then(()=>{
        res.json({message:"delete successful"})
    })
})

router.post("/save", (req, res)=>{
    const {title, author, publisher} = req.body;

    let newBook = new Book({
        title,
        author,
        publisher,
        page: 500,
    })
    newBook.save().then(()=>{
        res.json({message: "Data Saved"})
    })
})


export default router;
