import app from "./app.js";
import path from 'path';


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname
    ,'/build/index.html')); });
    
app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})