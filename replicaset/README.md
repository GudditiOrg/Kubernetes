# Replicaset

<b> The ReplicaSet configuration defines a number of identical pods required, and if a pod is evicted or fails, creates more pods to compensate for the loss. </b>

<img src="https://godleon.github.io/blog/images/kubernetes/k8s-replicaset.png" alt="Replicaset">

https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/

## To run code 
1. clone this repo 
2. cd replicaset 
3. kubectl apply -f replicaset.yml
4. kubectl get rs -w  <br>

> The restartPolicy field is used in the context of pods, not ReplicaSets.
### Output : 
```yaml
NAME       DESIRED   CURRENT   READY   AGE
nginx-rs   3         3         3       11s

```
5. kubectl get rs nginx-rs -o yaml
6. kubectl delete -f replicaset.yml
### we can only run container but don't exposes outside unless expose service .

### Optional : 
you can build docker image and replace image name in k8 manifest .
