const express = require("express")
const { request } = require("http")

const app = express()

console.log("Express Lab")

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];







// Ex No.1

app.get("/greetings/:name",(req,res)=>{
    console.log(req.params)
    res.send("Hello, " + req.params.name)
    
})

// Ex No.2 

app.get("/roll/:number",(req,res)=>{
    console.log(req.params)
    res.send("Numer is, " + req.params.number)
    
})

// Ex No.3 

app.get('/collectibles/:index', (req, res) => {
  const index = req.params.index
  const indexNum = Number(index)

  if (collectibles[indexNum]) {
    const selected = collectibles[indexNum]
    res.send(`So, you want the ${selected.name}? For ${selected.price}, it can be yours!`)
  } else {
   res.send('This item is not yet in stock. Check back soon!')
  }
})


// Ex No.4 

app.get('/shoes', (req, res) => {
        
  const { 'min-price': minPrice, 'max-price': maxPrice } = req.query;

  let foundShoes = shoes
  if(minPrice){
      foundShoes = foundShoes.filter((shoe) => {
                  return (shoe.price >= minPrice)
              })
  }

  if(maxPrice){
      foundShoes = foundShoes.filter((shoe) => {
                  return (shoe.price <= maxPrice)
              })
  }

  if(req.query.type){
      foundShoes = foundShoes.filter((shoe) => {
                  return (shoe.type === req.query.type)
              })
  }



  res.send(foundShoes)

})



app.listen(3000,()=>{
    console.log("listening on port 3000")
})
