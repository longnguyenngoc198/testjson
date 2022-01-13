// // setInterval(function() {
// //     console.log(Math.random())
// // }, 2000)
// // let không thể khai báo đè lại
// // a.splice(4)
// function writeLog() {
//     var mStr = ' ';
//     for (var param of arguments) {
//         mStr += `${param} - `
//     }
//     console.log(mStr);
// }
//  function function1() {
//      console.log('message 1')
//      function function1() {
//          console.log('message 2')
//      }
//     function1();
//  }

// function User(name, gender, email) {
//     this.name = name;
//     this.gender = gender;
//     this.email = email;

//     this.getUsers = function() {
//         return `Name is: ${this.name} and Sex: ${this.gender}`;
//     }
// }

// const NGU_TOC = 'NGU_TOC'
// const XA_TOC = 'XA_TOC'
// const DIEU_TOC = 'DIEU_TOC'

// function initMonster(type) {

//     let atk, hp, spd;
//    switch(type) {
//         case NGU_TOC: 
//             atk = 100;
//             hp = 200;
//             spd = 300;
//             break;
//         case XA_TOC: 
//             atk = 200;
//             hp = 100;
//             spd = 300;
//             break;
//         case DIEU_TOC:
//             atk = 300;
//             hp = 100;
//             spd = 200;
//             break;
//    }
//     return [atk, hp, spd]
// }

// // var initMonsterLength = initMonster().length;
// // for(var value of initMonster(NGU_TOC)) {
// //     console.log(value)
// // }
// var topics = [
//     { 
//         name: 'FE',
//         courses: [
//             {
//                 id: 1,
//                 title: 'Html, css'
//             },
//             {
//                 id: 2,
//                 title: 'javascript'
//             }
//         ],
//     },
//      { 
//         name: 'BE asdsfdgh',
//         courses: [
//             {
//                 id: 1,
//                 title: 'Node Js'
//             },
//             {
//                 id: 2,
//                 title: 'PHP'
//             }
//         ],
//     }
// ];

// var courses = [
//     'java1',
//     'php',
//     'Javarscript',
//     'Javarscript',
//     'Javarscript1',
// ];

// Array.prototype.a = function (callback) {
//     for(var index in this) {
//         if(this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this)
//             if(!result) {
//                 return false;
//             } else {
//                 return true;
//             }
//         }
//     }
// }

// var users = [
//     {
//         id: 1,
//         name: 'Kien Dam',
//     },
//     {
//         id: 2,
//         name: 'Son Dang',
//     },
//     {
//         id: 3,
//         name: 'Duc Hao',
//     },
// ]

// var comments = [
//     {   
//         id: 1,
//         user_id: 1,
//         content: 'Anh Son chua ra video :(',
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Vua ra xong em oi',
//     },
//     {   
//         id: 1,
//         user_id: 1,
//         content: 'hihi',
//     },
// ]

// var getComments = function() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(comments);
//         }, 1000);
//     })
// }
// var getUsers = function(userIds) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             var result = users.filter(function(user) {
//                 return userIds.includes(user.id);
//             })
//             resolve(result);
//         }, 1000);
//     })
// }

// getComments()
//     .then(function(comments) {
//         var userIds = comments.map(function(comment) {
//             return comment.user_id;
//         })
//         return getUsers(userIds)
//             .then(function(users) {
//                 return {
//                     users: users,
//                     comments: comments,
//                 }
//             })
//     })
//     .then(function(data) {
//         var box = document.getElementById('comment-box');
//         var html = '';
//         data.comments.forEach(function(comment) {
//             var user = data.users.find(function(user) {
//                 return user.id === comment.user_id;
//             })
//             html += `<li>${user.name}: ${comment.content}</li>`
//         })
//         box.innerHTML = html;
//     })

// var postsApi = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postsApi)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data){
//         var box = document.getElementById('comment-box');
//         var html = '';
//         data.forEach(function (item) {
//             html += 
//             `<li>
//                 <h2>${item.title}</h2>
//                 <p>${item.body}</p>
//             </li>`;
//         })
//         box.innerHTML = html;
//     })

var db = 'http://localhost:3000/posts';

fetch(db)
    .then(function(response) {
        return response.json();
    })
    .then(function(datas) {
        var html = '';
        var box = document.querySelector('#comment-box');
        datas.forEach(function(data){
            html += 
            `
                <h2>${data.title}</h2>
                <p>${data.author}</p>
            `
        })
        box.classList.toggle('red');
        box.innerHTML = html;
    })
