const defaultSurveyJson = {
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "checkbox",
      "name": "question1",
      "title": "Option One",
      "isRequired": true,
      "choices": [
       {
        "value": "item1",
        "text": "uno"
       },
       {
        "value": "item2",
        "text": "dos"
       },
       {
        "value": "item3",
        "text": "tres"
       },
       {
        "value": "item4",
        "text": "cuantro"
       },
       {
        "value": "item5",
        "text": "cinco"
       },
       {
        "value": "item6",
        "text": "seis"
       }
      ],
      "hasNone": true,
      "noneText": "Ninguno"
     },
     {
      "type": "boolean",
      "name": "question2",
      "title": "Algo",
      "isRequired": true
     }
    ],
    "title": "Example"
   }
  ]
 }
const defaultSurveyCss = {}
const defaultSurveyData = {
  "question1": [
    "item6"
  ],
  "question2": true
}

const defaulltSurveyConfig = {
  defaultSurveyJson,
  defaultSurveyCss,
  defaultSurveyData
}

export default defaulltSurveyConfig