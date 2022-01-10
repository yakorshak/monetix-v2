'use strcit'

/* 
general:project_id:3254
general:payment_id:id_38202316
customer:id:585741
customer:email:johndoe@mycompany.com
customer:first_name:John
customer:last_name:Doe
customer:address:Downing str., 23
customer:identify:doc_number:54122312544
customer:ip_address:111.222.333.444
payment:amount:10800
payment:currency:USD
payment:description:Computer keyboards
*/

const json = {
        "general": {
            "project_id": 3254,
            "payment_id": "id_38202316",
            "trst": {
                'yes': 1,
                'no': 2,
            },
           "signature": "<digital signature to generate>" 
        },
        "customer": {
            "id": "585741",
            "email": "johndoe@mycompany.com",
            "first_name": "John",
            "last_name": "Doe",
            "address": "Downing str., 23",
            "identify": {
                "doc_number": "54122312544"
            },
            "ip_address": "111.222.333.444"
        },
        "payment": {
            "amount": 10800,
            "currency": "USD",
            "description": "Computer keyboards"
        },
        "receipt_data": {
            "positions": [
                {
                    "quantity": "10",
                    "amount": "108",
                    "description": "Computer keyboard"
                }
            ]
        },
        "return_url": {
            "success": "https://paymentpage.mycompany.com/complete-redirect?id=success",
            "decline": "https://paymentpage.mycompany.com/complete-redirect?id=decline"
        }
    }

function recursion(objectKey, str, arr) {
    if (typeof this[objectKey] !== 'object'){
        str += this[objectKey];
        arr.push(str)
        return;
    } else {
        for (let key in this[objectKey]){
            str += key + ':';
            recursion.call(this[objectKey], key, str, arr);
        }
    }
}

function transformationAlgoritm(globalObject){
    let arr = [];
    let str;  
    for (let key in globalObject){
        str = key + ':';
        recursion.call(globalObject, key, str, arr); // передаем general
    }
    return arr;
}

let result = transformationAlgoritm(json);

console.log(result);
