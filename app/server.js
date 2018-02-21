const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve('./public')));
app.use(express.static(path.resolve('./dist')));

app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'../public/index.html'));
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

console.log('server started')