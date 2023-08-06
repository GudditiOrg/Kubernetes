# ConfigMap

<b> A ConfigMap is an API object used to store non-confidential data in key-value pairs. Pods can consume ConfigMaps as environment variables, command-line arguments, or as configuration files in a volume. </b>

<img src="https://miro.medium.com/v2/resize:fit:1160/0*doaioRB-9pQ-Hy21" alt="Deployments">

https://kubernetes.io/docs/concepts/configuration/configmap/#:~:text=A%20ConfigMap%20is%20an%20API,configuration%20files%20in%20a%20volume.


## To run code 
1. clone this repo 
2. cd configmap
3. kubectl apply -f .
4. kubectl get all -w  <br>

> The restartPolicy field is used in the context of pods, not ReplicaSets.
### Output : 
```yaml
NAME                               READY   STATUS    RESTARTS   AGE
pod/nginx-deploy-c6bd88887-gjnvg   1/1     Running   0          3m25s
pod/nginx-deploy-c6bd88887-mxbch   1/1     Running   0          3m25s
pod/nginx-deploy-c6bd88887-vff9v   1/1     Running   0          3m25s

NAME                    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
service/kubernetes      ClusterIP   10.96.0.1       <none>        443/TCP        13d
service/nginx-service   NodePort    10.99.152.108   <none>        80:32249/TCP   49s

NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/nginx-deploy   3/3     3            3           3m25s

NAME                                     DESIRED   CURRENT   READY   AGE
replicaset.apps/nginx-deploy-c6bd88887   3         3         3       3m25s
```
5. kubectl get deploy nginx-deploy -o yaml
6. kubectl delete -f .
### we can only run container but don't exposes outside unless expose service .

### Optional : 
you can build docker image and replace image name in k8 manifest .


