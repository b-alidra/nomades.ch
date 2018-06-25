app.locals.posts = [
    {_id: 1, title: "Bacon Avocado Salad", body: "Place bacon in a large..."},
    {_id: 2, title: "Crispy Orange Beef", body: "Lay beef strips out in..."},
    {_id: 3, title: "Simple BBQ Ribs", body: "Place ribs in a large..."},
];
// create
app.post("/api/posts", (req, res) => ...);
// read
app.get("/api/posts", (req, res) => ...);
app.get("/api/posts/:id", (req, res) => ...);
// update
app.put("/api/posts/:id", (req, res) => ...);
// destroy
app.delete("/api/posts/:id", (req, res) => ...);
