# Requests and limits 

<b>If the node where a Pod is running has enough of a resource available, it's possible (and allowed) for a container to use more resource than its request for that resource specifies. However, a container is not allowed to use more than its resource limit.

</b>
> For example, if you set a memory request of 256 MiB for a container, and that container is in a Pod scheduled to a Node with 8GiB of memory and no other Pods, then the container can try to use more RAM. 

<img src="https://blog.kubecost.com/assets/images/k8s-recs-ands-limits.png" alt="Requests and limits">

https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits


## To run code 
1. clone this repo 
2. cd secrets
3. kubectl apply -f .
4. kubectl get all -w  <br>

> The restartPolicy field is used in the context of pods, not ReplicaSets.
### Output : 
```yaml
NAME                            READY   STATUS    RESTARTS   AGE
pod/node-app-768d9676f4-85fhb   1/1     Running   0          10s
pod/node-app-768d9676f4-rp9zt   1/1     Running   0          10s

NAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
service/kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP          34m
service/node-svc     NodePort    10.102.229.44   <none>        3000:31143/TCP   10s

NAME                       READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/node-app   2/2     2            2           10s

NAME                                  DESIRED   CURRENT   READY   AGE
replicaset.apps/node-app-768d9676f4   2         2         2       10s

```
5. kubectl get deploy nginx-deploy -o yaml
6. kubectl delete -f .
### we can only run container but don't exposes outside unless expose service .

### Optional : 
you can build docker image and replace image name in k8 manifest .<br>
## The output of code :  
after deployment browse from here : [http://localhost:31143/](http://localhost:31143/) or [http://ip:31143/](http://ip:31143/)
![image](https://github.com/GudditiOrg/Kubernetes/assets/87116202/37b4ab58-4a82-48b0-88d9-05e17a6b6d7c)

# Note: When a pod in Kubernetes reaches its resource limits (CPU and memory), it may be throttled, terminated, or the entire pod may be restarted or evicted to prevent resource contention and maintain cluster stability. Properly configuring resource requests and limits is crucial to avoid these issues.

## Check Resource Requests and Limits for a Deployment:
To view the resource requests and limits set for a deployment, you can use the `kubectl get deployment` command to get the deployment's name, and then use `kubectl describe deployment ` to see the details:
