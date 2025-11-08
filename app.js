import fetch from "node-fetch"; // call websites and APIs

import amqp from "amqplib"; // RabbitMQ library

const API_KEY = "b9cfd6d35d8f6e91c4c5e8748a2b0898"; // env from docker compose

async function send() {

  // weather API request
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo,japan&APPID=${API_KEY}&units=metric`);

  // response as json
  const data = await res.json();

  // see api
  console.log(data);

  const msg = {
    temp: data.main.temp,
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
