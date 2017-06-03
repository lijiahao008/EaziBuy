const google_api_key = "AIzaSyDGc_MuGwVP7WZqfHcZD4tYp_d2Wgo4-BY";
const ebay_api_key = "JayLi-EaziBuy-PRD-02217b503-cd7976e9"

const buildData = (image_url) => {
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
            "maxResults": 4
          }
        ]
      }
    ]
  })
}


export const fetchLabel = (image_url) => {
  return $.ajax({
    method: 'POST',
    url: "https://vision.googleapis.com/v1/images:annotate?key=" + google_api_key,
    headers: {
      "Content-Type": "application/json",
    },
    data: buildData(image_url),
    dataType: "json"
  });
};

export const fetchEbayItems = (key_word) => {
  return $.ajax({
    method: 'GET',
    url: "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.12.0&SECURITY-APPNAME="+ebay_api_key + "&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=" + key_word + "&paginationInput.entriesPerPage=9",
    dataType: 'jsonp'
  });
};

export const fetchYoutubeItems = (key_words) => {
  return $.ajax({
    method: 'GET',
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + key_words + "&type=video&maxResults=9&videoCaption=closedCaption&key="+ google_api_key
  });
};
