const exprss = require('express')
const path = require('path')

const dashboardRoutes = require('./src/routes/dashboard')

const app = exprss()

app.use(exprss.static(
    path.join(__dirname, "public")
), exprss.json())

app.listen(8080,"localhost", () => {
    console.log("Srver is listening on http://localhost:8080")
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});


dashboardRoutes(app)