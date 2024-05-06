const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html'); // change the path to your index.html
});
app.get('/styles.css', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'styles.css'));
});