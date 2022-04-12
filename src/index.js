const cors = require("cors");
const express = require("express");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const app = express();

const port = process.env.PORT || 8888;
app.use(cors());
const usersBulk = [
  [
    {
      guid: 65,
      firstName: "Sophie",
      lastName: "Colon",
      email: "efba@tuwgol.cv",
      phone: "7190675213",
      created_dt: "6/16/2027",
      created_by: "66",
      status: "ACTIVE",
      image:
        "https://pbs.twimg.com/profile_images/1480989717223071754/XD8xGocL_400x400.jpg",
      role: 1,
      permissions: [
        {
          guid: "100",
          app_guid: "5",
          type: 1,
        },
        {
          guid: "1050",
          app_guid: "6",
          type: 0,
        },
      ],
      extra: "{}",
    },
    {
      guid: 36,
      firstName: "Sean",
      lastName: "Haynes",
      email: "ocaradeb@awwotoh.ba",
      phone: "2203139690",
      created_dt: "1/26/2109",
      created_by: "9",
      status: "ACTIVE",
      image:
        "https://pbs.twimg.com/profile_images/993798212149489664/ZqYOh_qd_400x400.jpg",
      role: 1,
      permissions: [
        {
          guid: "1050",
          app_guid: "5",
          type: 1,
        },
      ],
      extra: "{}",
    },
    {
      guid: 79,
      firstName: "Mildred",
      lastName: "Ford",
      email: "hum@sawekbo.pa",
      phone: "8915187854",
      created_dt: "10/24/2103",
      created_by: "57",
      status: "ACTIVE",
      image:
        "https://pbs.twimg.com/profile_images/1412119450153799680/djtPQXnI_400x400.jpg",
      role: 2,
      permissions: [
        {
          guid: "3242",
          app_guid: "6",
          type: 1,
        },
      ],
      extra: "{}",
    },
    {
      guid: 39,
      firstName: "Cameron",
      lastName: "Underwood",
      email: "meded@ki.es",
      phone: "2360764324",
      created_dt: "8/12/2024",
      created_by: "90",
      status: "ACTIVE",
      image:
        "https://pbs.twimg.com/profile_images/1494144849930510339/HXI4I6hg_400x400.jpg",
      role: 1,
      permissions: [
        {
          guid: "13050",
          app_guid: "5",
          type: 0,
        },
      ],
      extra: "{}",
    },
  ],
  [
    {
      guid: 54,
      firstName: "Douglas",
      lastName: "Bryan",
      email: "lig@le.lb",
      phone: "2985687873",
      created_dt: "11/8/2105",
      created_by: "44",
      status: "ACTIVE",
      image:
        "https://pbs.twimg.com/profile_images/993798212149489664/ZqYOh_qd_400x400.jpg",
      role: 2,
      permissions: [
        {
          guid: "1150",
          app_guid: "6",
          type: 1,
        },
      ],
      extra: "{}",
    },
    {
      guid: 89,
      firstName: "Mildred",
      lastName: "George",
      email: "gukpawim@da.az",
      phone: "4301519945",
      created_dt: "8/16/2055",
      created_by: "39",
      status: "ACTIVE",
      image:
        "https://pbs.twimg.com/profile_images/1480989717223071754/XD8xGocL_400x400.jpg",
      role: 2,
      permissions: [
        {
          guid: "546",
          app_guid: "5",
          type: 1,
        },
      ],
      extra: "{}",
    },
    {
      guid: 13,
      firstName: "Iva",
      lastName: "Peterson",
      email: "beznub@ructiam.kz",
      phone: "9264715077",
      created_dt: "6/27/2092",
      created_by: "62",
      status: "ACTIVE",
      image:
        "https://pbs.twimg.com/profile_images/1480989717223071754/XD8xGocL_400x400.jpg",
      role: 2,
      permissions: [
        {
          guid: "8632",
          app_guid: "6",
          type: 1,
        },
      ],
      extra: "{}",
    },
    {
      guid: 19,
      firstName: "Jorge",
      lastName: "Garner",
      email: "sibube@boriraw.gg",
      phone: "8446391421",
      created_dt: "9/7/2106",
      created_by: "20",
      status: "ACTIVE",
      image:
        "https://pbs.twimg.com/profile_images/1480989717223071754/XD8xGocL_400x400.jpg",
      role: 1,
      permissions: [
        {
          guid: "5632",
          app_guid: "6",
          type: 0,
        },
      ],
      extra: "{}",
    },
  ],
  [
    {
      guid: 59,
      firstName: "Terry",
      lastName: "Manning",
      email: "foc@reoru.ke",
      phone: "7836670605",
      created_dt: "8/27/2053",
      created_by: "51",
      status: "ACTIVE",
      image:
        "https://pbs.twimg.com/profile_images/1480989717223071754/XD8xGocL_400x400.jpg",
      role: 2,
      permissions: [
        {
          guid: "8682",
          app_guid: "6",
          type: 0,
        },
      ],
      extra: "{}",
    },
    {
      guid: 20,
      firstName: "Ray",
      lastName: "Young",
      email: "unarape@ub.sz",
      phone: "9387136360",
      created_dt: "12/25/2023",
      created_by: "67",
      status: "ACTIVE",
      image:
        "https://pbs.twimg.com/profile_images/1480989717223071754/XD8xGocL_400x400.jpg",
      role: 5,
      permissions: [
        {
          guid: "86332",
          app_guid: "6",
          type: 0,
        },
      ],
      extra: "{}",
    },
    {
      guid: 59,
      firstName: "Henrietta",
      lastName: "Rhodes",
      email: "novow@wujoseh.mr",
      phone: "4988359950",
      created_dt: "10/19/2101",
      created_by: "54",
      status: "ACTIVE",
      image:
        "https://pbs.twimg.com/profile_images/1480989717223071754/XD8xGocL_400x400.jpg",
      role: 2,
      permissions: [
        {
          guid: "8632",
          app_guid: "6",
          type: 1,
        },
      ],
      extra: "{}",
    },
    {
      guid: 28,
      firstName: "Devin",
      lastName: "Jimenez",
      email: "mguidasab@ornguidu.nr",
      phone: "7786772094",
      created_dt: "2/10/2041",
      created_by: "100",
      status: "ACTIVE",
      image:
        "https://pbs.twimg.com/profile_images/1480989717223071754/XD8xGocL_400x400.jpg",
      role: 2,
      permissions: [
        {
          guid: "86342",
          app_guid: "6",
          type: 1,
        },
      ],
      extra: "{}",
    },
  ],
];

app.get("/api/users", (req, res) => {
  const currentPage = Number(req.query.page);
  res.json({
    result: {
      code: 200,
      msg: "Message to display to user IN CASE OF ERROR",
    },
    data: {
      users: [...usersBulk[currentPage - 1]],
      current_page: currentPage,
      per_page: 4,
      total: 12,
    },
  });
});

app.get("/api/roles", (req, res) => {
  // const currentPage = Number(req.query.page);
  res.json({
    result: {
      success: true,
      code: 200,
      msg: "Message to display to user IN CASE OF ERROR",
    },
    data: {
      roles: [
        {
          guid: 1,
          name: "Admin",
          permissions: [1, 2],
        },
        {
          guid: 2,
          name: "User",
          permissions: [3, 4],
        },
      ],
      permissions: [
        {
          guid: 1,
          name: "Admin Apllication 1 (guid 1)",
        },
        {
          guid: 2,
          name: "Admin Apllication 2 (guid 2)",
        },
        {
          guid: 3,
          name: "User Apllication 1 (guid 3)",
        },
        {
          guid: 4,
          name: "User Apllication 2 (guid 4)",
        },
        {
          guid: 5,
          name: "General Apllication 1 (guid 5)",
        },
        {
          guid: 6,
          name: "General Apllication 2 (guid 6)",
        },
      ],
    },
  });
});
app.get("/", (req, res) => {
  res.send("Successful response.");
});

//post route for home-settings
app.post("/api/home-settings", jsonParser, (req, res) => {
  const { guid } = req.body;
  res.status(200).end();
});

//get route for home settings
app.get("/api/home-settings", (req, res) => {
  res.json({ guid: 2 });
});
app.listen(port, () => {
  console.log(`Example app is listening on port .`);
  console.log(`http://localhost:${port}/api/users?page=1&per_page=4`);
  console.log(`http://localhost:${port}/api/users?page=2&per_page=4`);
  console.log(`http://localhost:${port}/api/users?page=3&per_page=4`);
  console.log(`http://localhost:${port}/api/home-settings`);
  console.log(`http://localhost:${port}/api/roles`);
});
