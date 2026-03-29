const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
main()
    .then(()=>{
        console.log("connection sucessful");
    })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


let allChats = [
    {
        from:"Gayatree",
        to:"Ram",
        msg:"hey whats up",
        created_at:new Date(),
    },
      {
        from:"Laxmi",
        to:"Bikash",
        msg:"hey  are you okay",
        created_at:new Date(),
    },
      {
        from:"Rudra",
        to:"jagan",
        msg:"hey bro..",
        created_at:new Date(),
    },
      {
        from:"Jack",
        to:"Adward",
        msg:"are you sure about this",
        created_at:new Date(),
    },
      {
        from:"Rose",
        to:"nikhil",
        msg:"i am going to market",
        created_at:new Date(),
    },
];


Chat.insertMany(allChats);
  