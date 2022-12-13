# NGINX-Kummer

pm2 start server.js --name="Server1" --watch -- 8082
pm2 start server.js --name="Server2" --watch -i max -- 8083
pm2 start server.js --name="Server1" --watch -- 8084
pm2 start server.js --name="Server1" --watch -- 8085

