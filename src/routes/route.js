const router = require("express").Router();
const { register,  getUsers, userLogin, updateUser } = require("../controllers/userController");
const {createProduct , getProductById, getProducts,productdelete } = require("../controllers/productController")
const{createCart} = require("../controllers/cartController")
const { isAuthenticated, isAuthorized } = require("../middleware/commonMiddleware")



router.post("/register",register);
router.post("/login",userLogin);
router.get("/user/:userId/profile",getUsers);
router.put("/user/:userId/profile" ,isAuthenticated, isAuthorized, updateUser);



router.post("/products" ,createProduct);
router.get("/products/:productId" , getProductById);
router.get("/products" ,getProducts);
router.delete("/products/:productId",productdelete)

router.post("/" ,createCart);




module.exports=router