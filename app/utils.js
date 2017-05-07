import React from 'react';
import request from 'superagent';

var arr = [];
var api = "http://localhost:5001/";


function loadData(path, retFunc) {
    console.log("loadData "+retFunc)
var fullpath=api+path
    request
        .get(fullpath)
        .end((err, res) => {
             if (err) console.log(err);
           
            retFunc(res.body)
          
            console.log("state is set")
        });
}       


function addCar(data, ret){

    request
    .post(api + 'addcar')
    .send({ "name": data["chosenName"], "year": data["chosenYear"]})
    .end((err, res) => {
        if (err) console.log(err);
        console.log(res);
        ret(res.body)

    })

   
}

function updateCar(data, ret) {

      request
        .put(api + 'updatecar')
        .send(data)
        .end((err, res) => {
            if (err) console.log(err);
           
            ret(res.body);
           
        })

}

function deleteCar(data, ret) {
  console.log("deleteCar "+data)
      request
        .delete(api + 'deletecar')
        .send({data})
        .end((err, res) => {
            if (err) console.log(err);
          
         // for(var prop in res.body){
            console.log("---" +res.body)
         // }
            ret(res.body)
           
        })

}


export { loadData, addCar, updateCar, deleteCar }
