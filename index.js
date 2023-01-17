
// // Fetch the collection data
// fetch("https://webflow.com/api/collections/63c061f5482ce190c19b57bc?token=fe9d531d470d19ba96cc3263f3481ecef5bd0b06cdc158e44f4e94109012192e")
//   .then(response => response.json())
//   .then(data => {
//     // Iterate through the collection items
//     console.log(data)
//   });

// const request = require('request')



//   const options = {
//     method: "GET",
//     url : "https://api.webflow.com/collections/63c061f5482ce190c19b57bc",
//     headers: {
//       "Accept-Version" : '1.0.0',
//       "Authorization": "899aadcd8188f246e6794ed30b42dc0746dad1438e31ab3740b70c137fe69fc8"
//     }
//   }


// request(options, function(error, response, body){
//   console.log(body)
// })
  

const Webflow = require("webflow-api")

const webflow = new Webflow({token : '899aadcd8188f246e6794ed30b42dc0746dad1438e31ab3740b70c137fe69fc8' });



// webflow.collection.items({ itemId: "63c061f5482ce190c19b57bc" }).then((res)=>{
//   console.log(res)
// })

const collection = webflow.collection({ collectionId: "63c060b0a22252809028dead" }).then((e)=>{
  console.log(e)
})
