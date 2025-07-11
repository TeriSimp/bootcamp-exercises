import express from "express";

const app = express();
const port = 3000;

// Step 2: Make sure that static files are linked to and the CSS shows up.
app.use(express.static("public"));

/* Write your code here:
Step 1: Render the home page "/" index.ejs */

app.use("/", (req, res) => {
  res.render("index.js");
});

/* Step 3: Add the routes to handle the render of the about and contact pages.
Hint: Check the nav bar in the header.ejs to see the button hrefs */

app.use("/about", (req, res) => {
  res.render("about.js");
});

app.use("/contact", (req, res) => {
  res.render("contact.js");
});

// Step 4: Add the partials to the about and contact pages to show the header and footer on those pages.

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
