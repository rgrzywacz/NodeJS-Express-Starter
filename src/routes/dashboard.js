const path = require('path')

function dashboardRoutes(app) {     
    console.log('DashboardRoutes init')
    app.get('/dashboard',function(req,res){
        res.sendFile(path.join(__dirname+'/../../public/dashboard.html'));
    });
}

module.exports = dashboardRoutes;