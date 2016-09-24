var React = require('react');
// const data = require('json!./adObjects.json');
// import data from './adObjects.json';


const adData = {
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


module.exports = {

    getColNames(){

        // var data = adData;
        console.log("data: " + adData)
        var names = []
        for (var i = 0; i < adData.ads.length; i++) {
            names.push(adData.ads[i].name)
        };
        console.log("get colNames: " + names)
        return names
    }

}
