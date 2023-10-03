## If you want to test your Kubernetes Deployment by sending more requests to it, you can use various tools and approaches to generate traffic.

#!/bin/bash


# Number of requests to send
num_requests=400

# URL of your application's endpoint
app_url="http://localhost:31143"

# Loop to send multiple requests
for ((i = 0; i < num_requests; i++)); do
  response=$(curl -s -o /dev/null -w "%{http_code}" "$app_url")
  if [ "$response" == "200" ]; then
    echo "Request $i: Success"
  else
    echo "Request $i: Failed (HTTP response code: $response)"
  fi
done
