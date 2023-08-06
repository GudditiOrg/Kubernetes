# Secrets

<b> A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key. </b>

<img src="https://www.padok.fr/hubfs/Images/Blog/kubernetes-secret-management-process.png" alt="Secrets">

https://kubernetes.io/docs/concepts/configuration/secret/


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
you can build docker image and replace image name in k8 manifest .


