(function (seedData) {
    seedData.initialItems = 
    [
        {"name":"John Doe 1"},
        {"name":"John Doe 2"},
        {"name":"John Doe 3"},
        {"name":"John Doe 4"},
        {"name":"John Doe 5"}
    ];

    seedData.initialAddresses =
      [
        {
          "firstname": "John ",
          "lastname": "Doe 1 ",
          "address": "123 Main Street",
          "city": "Dallas",
          "state": "TX",
          "postalcode": "75206"

        },
        {
          "firstname": "John ",
          "lastname": "Doe 2 ",
          "address": "102 Main Street",
          "city": "Fort Worth",
          "state": "TX",
          "postalcode": "75206"

        },
        {
          "firstname": "John ",
          "lastname": "Doe 3 ",
          "address": "102 Main Street",
          "city": "Fort Worth",
          "state": "TX",
          "postalcode": "75206"

        },
        {
          "firstname": "John ",
          "lastname": "Doe 4 ",
          "address": "102 Main Street",
          "city": "Fort Worth",
          "state": "TX",
          "postalcode": "75206"

        },
        {
          "firstname": "John ",
          "lastname": "Doe 5 ",
          "address": "102 Main Street",
          "city": "Fort Worth",
          "state": "TX",
          "postalcode": "75206"

        },
        {
          "firstname": "John ",
          "lastname": "Doe 6 ",
          "address": "102 Main Street",
          "city": "Fort Worth",
          "state": "TX",
          "postalcode": "75206"

        }
      ];

    seedData.initialPassengers =
      [
        {
          "id": 1,
          "fullname": "Steve",
          "checkedIn": true,
          "checkInDate": 1490742000000,
          "children": null
        },
        {
          "id": 2,
          "fullname": "Rose",
          "checkedIn": false,
          "checkInDate": null,
          "children": [
            {
              "name": "Ted",
              "age": 12
            },
            {
              "name": "Chloe",
              "age": 7
            }
          ]
        },
        {
          "id": 4,
          "fullname": "Louise",
          "checkedIn": true,
          "checkInDate": 1488412800000,
          "baggage": "hand-only",
          "children": [
            {
              "name": "Jessica",
              "age": 1
            }
          ]
        },
        {
          "id": 5,
          "fullname": "Tina",
          "checkedIn": false,
          "checkInDate": null,
          "children": null
        }
      ];




})(module.exports);


