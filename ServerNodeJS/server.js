const exp = require("express");
const fs = require('fs');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
var cors = require('cors')
const app = exp();
const port = 8000;
const PRIVATE_KEY = fs.readFileSync('private-key.txt');
const fetch = require ("node-fetch");
app.use(bodyParser.json()); 
app.use(cors());
app.get("/", (req, res) => { res.send("<h1>Đây là trang home</h1>");});
app.post("/login", async (req, res) => {
     const un = req.body.un;
     const pw = req.body.pw;
     let check = await checkUserPass(un, pw);
     if (check) {
       const userInfo = await getUserInfo(un);
       console.log(userInfo);
       if (userInfo) {
         const jwtBearerToken = jwt.sign({}, PRIVATE_KEY, {
           algorithm: "RS256",
           expiresIn: 120,
           subject: userInfo.id.toString(),
         });
         //res.cookie("SESSIONID", jwtBearerToken, {httpOnly:true, secure:false});
         res
           .status(200)
           .json({ idToken: jwtBearerToken, userId: userInfo.id, expiresIn: 120 });
       }
     } else res.sendStatus(401); // send status 401 Unauthorized
   });
// app.post('/login', (req, res) => {
//      const un = req.body.un;
//      const pw = req.body.pw;
//      if (checkUserPass(un, pw)) {
//           const userInfo = getUserInfo(un);   
//           const jwtBearerToken = jwt.sign({}, PRIVATE_KEY, {
//              algorithm: 'RS256',  
//              expiresIn: 120, 
//              subject: userInfo.id
//           })          
//           res.status(200).json({ idToken: jwtBearerToken, expiresIn: 120 });
//        }
//        else res.sendStatus(401);  
// })
checkUserPass = async (un, pw) => {  
          const response = await fetch("http://localhost:3000/user");
          const data = await response.json();
          let check;
          data.forEach((item) => {
               if (un == item.username && pw == item.password) {
                    check = true;
               }else{
                    check = false;
               }
          });
          if (check) {
               return true;
          } else {
               return false;
          }
     }
     getUserInfo = async (un) =>{  
         // if (username=='aa') return { "id":"1", hoten:"Nguyễn Văn Tèo" }  
         // if (username=='bb')  return { "id":"2", hoten:"Nguyễn Thị Lượm" }  
         // return {"id":"-1", "hoten":""}
             const response = await fetch("http://localhost:3000/user");
             const data = await response.json();
             let temp = false;
             data.forEach((item) => {
                  if (un == item.username) {
                       // console.log(true);
                       temp = item;
                  }
             });
             if (temp) {
                  return temp;
             } else {
                  return 0;
             }
        }
// checkUserPass = (un, pw) => {
//      if (un=='aa' && pw=='123') { return true}
//      if (un=='bb' && pw=='321') { return true}
//      return false; 
// }
// getUserInfo = (username) =>{  
//      if (username=='aa') return { "id":"1", hoten:"Nguyễn Văn Tèo" }  
//      if (username=='bb')  return { "id":"2", hoten:"Nguyễn Thị Lượm" }  
//      return {"id":"-1", "hoten":""}
// }
app.listen(port, () =>{   
   console.log(`Ung dung dang chay voi port ${port}`); 
});