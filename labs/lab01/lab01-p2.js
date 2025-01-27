/*
home page
about us
contact
login
register
details
search page
*/

import http from "http";
import fs from "fs";
import path from "path";
const app = http.createServer((req, res) => {
  if (req.url === "/") {
    const home = fs.readFileSync(path.join("html", "home.html"))
    res.end(home);
  } else if (req.url === "/about") {
    const webpage = fs.readFileSync(path.join("html", "about.html"));
    res.end(webpage);
  }else if(req.url === "/contact") {
    // const contact = fs.readFileSync(path.join("html", "contact.html"));
  res.end(fs.readFileSync(path.join("html", "contact.html")));
  }else if(req.url === "/register") {

  res.end("Welocme to register page");
  }
  else if(req.url === "/details") {
  
  res.end("Welocme to details page");
  }
  else if(req.url === "/search") {
  
    res.end("Welocme to search page");
    }
  else {
    res.end("Page not found");
  }
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
