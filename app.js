import fetch from "node-fetch"; // call websites and APIs

import amqp from "amqplib"; // RabbitMQ library

const API_KEY = "c46aa65bd662d6a81d406ccad53deb8c"; // env from docker compose

// const CITY = "Tokyo";
const LAT = 35.6895;
const LON = 139.6917;


async function send() {

  // weather API request
  const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${LAT}&lon=${LON}&exclude=minutely,daily&units=metric&appid=${API_KEY}`);

  // response as json
  const data = await res.json();

  // see api
  console.log(data);

  const msg = {
    lat: Number(LAT),
    lon: Number(LON),
    temp: data.current.temp,
    time: Date.now() // simple timestamp
  };


  // print to console for testing
  console.log("Would send:", msg);

  // // rabbitmq connection
  // const conn = await amqp.connect("amqp://guest:guest@rabbitmq");
  // const ch = await conn.createChannel();
  // await ch.assertQueue("weather");
  // ch.sendToQueue("weather", Buffer.from(JSON.stringify(msg)));

  // console.log("Sent:", msg);

  // await ch.close();
  // await conn.close();
}

send(); // run now
// run every hour
setInterval(send, 3600000);
