# Pods

<b> Pods are the smallest deployable units of computing that you can create and manage in Kubernetes. </b>

<img src="https://cdn.coderise.io/m/2018/01/22044232/kubernetes-pods.png" alt="Pods">

https://kubernetes.io/docs/concepts/workloads/pods/

## To run code 
1. clone this repo 
2. cd pods
3. kubectl apply -f pod.yml
4. kubectl get pods -w  <br>

### Output : 
```yaml
NAME        READY   STATUS    RESTARTS   AGE
nginx-pod   1/1     Running   0          3m4s
```
5. kubectl delete -f pod.yml
### we can only run container but don't exposes outside unless expose service .

### Optional : 
you can build docker image and replace image name in k8 manifest .
