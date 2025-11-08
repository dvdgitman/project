import fetch from "node-fetch"; // call websites and APIs

import amqp from "amqplib"; // RabbitMQ library

const API_KEY = process.env.API_KEY; // env from docker compose

async function send() {

  // weather API request
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo,japan&APPID=${API_KEY}&units=metric`);

  // response as json
  const data = await res.json();

  // see api
  console.log(data);

  const msg = {
    temperature_c: data.main.temp,
    timestamp_ms: new Date().toISOString() // logstash date filter
  };


  // print to console for testing
  console.log("Would send:", msg);

  // rabbitmq connection
  const conn = await amqp.connect("amqp://guest:guest@rabbitmq");
  const ch = await conn.createChannel();
  await ch.assertQueue("weather");
  ch.sendToQueue("weather", Buffer.from(JSON.stringify(msg)));

  console.log("Sent:", msg);

  await ch.close();
  await conn.close();
}

// unittests
export function hasTemp(data) {
  return data && data.main && typeof data.main.temp === "number";
}


if (process.env.NODE_ENV !== "test") {
  send();
  setInterval(send, 3600000);
}
