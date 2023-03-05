const nodemailer = require('nodemailer')

let transport = nodemailer.createTransport(//{
    //"host": "smtp.gmail.com",
    //"port": 465,
    //"secure": true,
    //auth: {
        //user: 'wangxizhou@gmail.com',
        //pass: '',
       
  //  }, 
   { "host": "smtp.qq.com",
    "port": 465,
    "secure": true,
    auth:{
        user:'397767619@qq.com',
        pass:'tdcdzkrpwojkbhfi',
    },
})
 
transport.sendMail({
    from:'397767619@qq.com',
    to:['wangxizhou@gmail.com'],
    subject:'name',
    //html:'#',
    text:'#',
},
function(err,data){
    if(err) return console.log(err)

    console.log('done')
    console.log(data)
})