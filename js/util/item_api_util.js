const buildData = (image_url) => {
  debugger
  return JSON.stringify({
    "requests":[
      {
        "image":{
        "source":{
          "imageUri": image_url
        }
      },
        "features":[
          {
            "type":"LABEL_DETECTION",
            "maxResults":5
          }
        ]
      }
    ]
  })
}

const api_key = "AIzaSyDGc_MuGwVP7WZqfHcZD4tYp_d2Wgo4-BY";

export const fetchItems = (image_url) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: "https://vision.googleapis.com/v1/images:annotate?key=" + api_key,
    headers: {
      "Content-Type": "application/json",
    },
    data: buildData(image_url),
    dataType: "json"
  });
};
