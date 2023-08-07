# Deployments

<b> A Kubernetes Deployment tells Kubernetes how to create or modify instances of the pods that hold a containerized application. Deployments can help to efficiently scale the number of replica pods, enable the rollout of updated code in a controlled manner, or roll back to an earlier deployment version if necessary. </b>

<img src="https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-deployment-static.png" alt="Deployments">

https://kubernetes.io/docs/concepts/workloads/controllers/deployment/

## To run code 
1. clone this repo 
2. cd deployments 
3. kubectl apply -f deployments.yml
4. kubectl get deploy -w  <br>

> The restartPolicy field is used in the context of pods, not ReplicaSets.
### Output : 
```yaml
NAME           READY   UP-TO-DATE   AVAILABLE   AGE
nginx-deploy   3/3     3            3           24s

```
5. kubectl get deploy nginx-deploy -o yaml
6. kubectl delete -f deployments.yml
### we can only run container but don't exposes outside unless expose service .

### Deployment lifecycle 
```YAML
kubectl rollout history deploy/nginx-deploy
deployment.apps/nginx-deploy 
REVISION  CHANGE-CAUSE       
1         <none>
2         <none>
3         <none>
```
### Optional : 
you can build docker image and replace image name in k8 manifest .


### The following are typical use cases for Deployments:

<li> Create a Deployment to rollout a ReplicaSet. The ReplicaSet creates Pods in the background. Check the status of the rollout to see if it succeeds or not.
<li> Declare the new state of the Pods by updating the PodTemplateSpec of the Deployment. A new ReplicaSet is created and the Deployment manages moving the Pods from the old ReplicaSet to the new one at a controlled rate. Each new ReplicaSet updates the revision of the Deployment.
<li> Rollback to an earlier Deployment revision if the current state of the Deployment is not stable. Each rollback updates the revision of the Deployment.
<li> Scale up the Deployment to facilitate more load.
<li> Pause the rollout of a Deployment to apply multiple fixes to its PodTemplateSpec and then resume it to start a new rollout.
<li> Use the status of the Deployment as an indicator that a rollout has stuck.
Clean up older ReplicaSets that you don't need anymore