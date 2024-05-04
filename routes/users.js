const express = require('express')
const router = express.Router()

let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];
//request for all users 
router.get('/',(req,res)=>{
    res.send(JSON.stringify(users),null,4)
})

//request for a particu user email

router.get('/:email',(req,res)=>{
    let email = req.params.email;
    let filtered_user = users.filter((user)=> user.email === email)
    res.send(JSON.stringify(filtered_user,null,4))
})

//Post request 
router.post("/",(req,res)=>{
    users.push({"firstName":req.query.firstName,"lastName":req.query.lastName,"email":req.query.email,"DOB":req.query.DOB});
    res.send("The user" + (' ')+ (req.query.firstName) + " Has been added!")
});

router.put("/:email", (req, res) => {
    const email = req.params.email;
    let filtered_users = users.filter((user) => user.email === email);
    if (filtered_users.length > 0) {
        let filtered_user = filtered_users[0];
        let DOB = req.query.DOB;
        //if the DOB has changed
        if(DOB) {
            filtered_user.DOB = DOB
        }
        /*
        Include code here similar to the one above for other attibutes
        */
        users = users.filter((user) => user.email != email);
        users.push(filtered_user);
        res.send(`User with the email  ${email} updated.`);
    }
    else{
        res.send("Unable to find user!");
    }
  });

  //Deleting a user 
  router.delete("/:email",(req,res)=>{
    const email = req.params.email;
    const users = users.filter((user)=> user.email != email)
    res.send(`User with email ${email} was deleted`)
  })
module.exports=router;