# Pods

<b> Pods are the smallest deployable units of computing that you can create and manage in Kubernetes. </b>

<img src="https://cdn.coderise.io/m/2018/01/22044232/kubernetes-pods.png" alt="Pods">

https://kubernetes.io/docs/concepts/workloads/pods/

## To run code 
<li> clone this repo 
<li> `cd pods`
<li> `kubectl apply -f pod.yml`
<li> `kubectl get pods -w `
> Output: <br>
```
NAME        READY   STATUS    RESTARTS   AGE
nginx-pod   1/1     Running   0          3m4s
```


> we can only run container but don't exposes outside unless expose service .

Optional : 
you can build docker image and replace image name in k8 manifest .
