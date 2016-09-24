// var React = require('react');
// const data = require('json!./adObjects.json');

// import data from './adObjects.json';

// var adObject = React.createClass({
//
//     render: function(){
//         return (
//             <div>
//                 <h3>render adObject</h3>
//             </div>
//         )
//     }
// });

const data = {
    "ads": [
        {
            "id": 1,
            "remote_id": "123",
            "name": "123",
            "status": "ACTIVE",
        },
        {
            "id": 2,
            "remote_id": "456",
            "name": "456",
            "status": "ACTIVE",
        },
        {
            "id": 3,
            "remote_id": "789",
            "name": "789",
            "status": "ACTIVE",
        },
        {
            "id": 4,
            "remote_id": "901",
            "name": "901",
            "status": "ACTIVE",
        },
    ]
};

// module.exports = {
//     getColNames: function(data){
//         var names = []
//         for (var i = 0 ; i < data.ads.length ; i++) {
//             name.push(adObject.ads[i].name)
//         };
//         console.log("get colNames: " + names)
//         return names
//
//     }
// };