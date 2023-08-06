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
$ kubectl get all -n node
NAME                            READY   STATUS    RESTARTS        AGE
pod/node-app-655589b65c-5x8v6   1/1     Running   4 (6m47s ago)   7m54s
pod/node-app-655589b65c-fwwhm   1/1     Running   4 (6m53s ago)   7m54s

NAME               TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
service/node-svc   NodePort   10.110.163.68   <none>        3000:31143/TCP   7m54s

NAME                       READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/node-app   2/2     2            2           7m54s

NAME                                  DESIRED   CURRENT   READY   AGE
replicaset.apps/node-app-655589b65c   2         2         2       7m54s


```
5. kubectl get deploy nginx-deploy -o yaml
6. kubectl delete -f .
### we can only run container but don't exposes outside unless expose service .

### Optional : 
you can build docker image and replace image name in k8 manifest .


