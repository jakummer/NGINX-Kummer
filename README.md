# NGINX-Kummer
---COMANDDOS ÚTILES


---MODO FORK
pm2 start server.js --name="Server1" --watch -- 8082
pm2 start server.js --name="Server1" --watch -- 8083
pm2 start server.js --name="Server1" --watch -- 8084
pm2 start server.js --name="Server1" --watch -- 8085

---MODO CLUSTER
pm2 start server.js --name="Server2" --watch -i max -- 8082
pm2 start server.js --name="Server2" --watch -i max -- 8083
pm2 start server.js --name="Server2" --watch -i max -- 8084
pm2 start server.js --name="Server2" --watch -i max -- 8085


pm2 stop all
pm2 delete all
pm2 restart all




