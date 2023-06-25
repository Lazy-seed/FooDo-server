import express from 'express';
import { addFoods, allFoods, getFoods } from '../controller/food_controller.js';
import { addCart, allCart, deleteCart } from '../controller/cart_controller.js';
import { login, logout, register, userInfo, userUpdate } from '../controller/user_controller.js';
import { Auth } from '../middleware/auth.js';


const route=express.Router();


//  foods
route.get('/allFoods',allFoods)
route.post('/addFoods',addFoods)
route.get('/getFoods/:type',getFoods)





// cart
route.get('/allCart',Auth,allCart)
route.post('/addCart',Auth,addCart)
route.delete('/deleteCart/:id',Auth,deleteCart)



// user
route.post('/register',register);
route.post('/login',login);
route.get('/userInfo',Auth,userInfo);
route.put('/userUpdate',Auth,userUpdate);

route.get('/logout',Auth,logout)

export default route;




