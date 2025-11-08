# 🌦️ Weather App

This is a small demo that fetches the current temperature from OpenWeatherMap and pushes it into RabbitMQ.  
Logstash picks it up and sends it into Elasticsearch.  
Kibana can display the temperature history.

Elasticsearch + Kibana runs on my local **QNAP setup**.

---

## 🖼️ System Flow
### RabbitMQ
![ RabbitMQ](https://github.com/dvdgitman/project/blob/main/Screenshot%202025-11-08%20222036.png?raw=true)

### Kibana Temperature View
![Kibana Temperature](https://github.com/dvdgitman/project/blob/main/Screenshot%202025-11-08%20225008.png?raw=true)

### Kibana Dashboard
![Kibana Temperature](https://github.com/dvdgitman/project/blob/main/Screenshot%202025-11-08%20230216.png?raw=true)
