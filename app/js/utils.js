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


// function postData(data, t, idx, ret) {

//     if (t == 'node') {

//         request
//             .post(api + 'node/create')
//             .send({ "label": data, "id": idx })
//             .end((err, res) => {
//                 if (err) console.log(err);
//                 // console.log(res);
//                 ret(idx, res.body._id)
//             })

//     } else if (t == 'arc') {

//         request
//             .post(api + 'arc/create')
//             .send({ "source": data["source"], "dest": data["dest"], "weight": data["weight"] })
//             .end((err, res) => {
//                 if (err) console.log(err);
//                 //console.log(res);
//                 ret(idx, res.body._id)

//             })

//     } else {

//         console.log("conditional error")
//     }

// }

// function deleteNode(data) {
  
//       request
//         .delete(api + 'node/delete')
//         .send({data})
//         .end((err, res) => {
//             if (err) console.log(err);
         
//             loadData('http://localhost:5001/getnodesandarcs', this);
           
//         })

// }

// function deleteArc(data) {
  
//       request
//         .delete(api + 'arc/delete')
//         .send({data})
//         .end((err, res) => {
//             if (err) console.log(err);
         
//             loadData('http://localhost:5001/getnodesandarcs', this);
           
//         })

// }



// function updateNode(data) {
 
//       request
//         .put(api + 'node/update')
//         .send(data)
//         .end((err, res) => {
//             if (err) console.log(err);
//           console.log("updateNode "+this)
//             //this.loadData('http://localhost:5001/getnodesandarcs');
           
//         })

// }
// function updateArc(data) {
     
//       request
//         .put(api + 'arc/update')
//         .send(data)
//         .end((err, res) => {
//             if (err) console.log(err);
//          console.log("updateArc")
//          loadData('http://localhost:5001/getnodesandarcs', this);
           
//         })

// }


//  function addNode(label, parentNode) {
 
//     var nodes = this.state.nodes;
//     var idx = nodes.length;
//     label = label || 'Node' + idx
//     nodes[idx] = {
//         node: idx,
//         _id:"AAA",
//         'label':label
//     };

//     postData(label, "node", idx, this.updateNodeIDX );

//     this.setState({ nodes });
//     this.setState({ parentNode:parentNode });
//     }

// function updateNodeIDX(idx, _id){

//     var nodes=this.state.nodes;
   
//     nodes[idx]._id=_id
//     this.setState({ nodes })
//     //db nodes
//     console.log(JSON.stringify("parentNode: "+ this.state.parentNode))

//     if(this.state.parentNode!=0){

//         console.log("adding new arc root"+this)
//         this.addArc(this.state.parentNode, _id, 1)
       
//     }


// }


// //******ARCS*****
// function addArc(source, dest, weight) {
   
//     // here are the arcs from the db, that get loaded in componentDidMount function.
//     var arcs = this.state.arcs;
   
//     //we find the length so we can add the incoming arc to the end of the array.
//     //NB!! this is array of arcs that were loaded in earlier. It is not 
//     //a robust solution. A better solution would be to upload it to the db and send
//     //a callback that uploads all the arcs again once the db oks the input.
//     var idx = arcs.length;
//     arcs[idx] = { source, dest, weight };
//     //local arcs now have the newly added arc


//     //add that arc to the db. Notice we are sending the idx, so the db knows where in the array
//     //or new arc is being put.
//     var a = { "source": source, "dest": dest, "weight": weight }
//     this.postData(a, "arc", idx, this.updateArcIDX, this);

//     //this is simply adding the list of local arcs now with the new arc to our apps current state to keep
//     //our tree up to date. There is a little wiggle room for our db and local arcs to get out of sync here.
//     this.setState({ arcs });
    


    
// }
// //this function is the callback called when the data has been inserted into the db.
// //it finds the newly created arc and its place in the array with idx and adds an _id to it
// //that was automatically created by the db
// function updateArcIDX(idx, _id){
//      console.log("updateArcIDX: "+ this)
//     //console.log("idx "+idx)
//     var arcs=this.state.arcs;
//     //console.log("_id "+_id)
//     arcs[idx]._id=_id
//     //because it is called from outside the scope of this component, 
//     //we have to pass a reference to the root 
//     this.setState({ arcs })
//     //NOW! the set of local arcs is in sync with the db.
// }


export { loadData, addCar, updateCar, deleteCar/* postData, deleteNode, deleteArc, addNode, addArc, updateArcIDX, updateNodeIDX, updateNode, updateArc*/ }
