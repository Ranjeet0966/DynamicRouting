

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');

const errorController = require('./controllers/error');
// const mongoConnect = require('./util/database').mongoConnect;

const  User = require('./models/user')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('6618b83ecfda1e0ca6d30a44')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
 app.use(shopRoutes);

app.use(errorController.get404);

// Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, {through: CartItem});
// Product.belongsToMany(Cart, {through: CartItem});


// sequelize
//   .sync({ force: true })
//   //.sync()
//   .then(result => {
//     return User.findByPk(1);
//     // console.log(result);
//   })
//   .then(user => {
//     if (!user) {
//       return User.create({ name: 'Max', email: 'test@test.com' });
//     }
//     return user;
//   })
//   .then(user => {
//     // console.log(user);
//     app.listen(3001);
//   })
//   .catch(err => {
//     console.log(err);
//   });

mongoose.connect('mongodb+srv://rahul:rahul@atlascluster.sw1lvwy.mongodb.net/')
.then(result=>{
  User.findOne().then(result=>{
    if(!User){
      const user= new User({
        name:'Ranjeet',
        email:'innovativeranjeet@gmail.com',
        cart:{items:[]}
      })
      user.save()
    }
  })
 
  app.listen(3001)
})
.catch(err=>{
  console.log(err);
});

