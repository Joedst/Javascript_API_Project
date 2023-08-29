       
       fetch('https://firestore.googleapis.com/v1/projects/javascriptdatabase/databases/(default)/documents/testpost')
            method: 'POST'
       let body =
       JSON.stringify (
       {
       
       "username" : {
         "stringValue": "testar en gång till"
       },
       "email": {
         "stringValue": "simon@hej.se"
       }
       })