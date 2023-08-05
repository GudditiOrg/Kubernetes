# Service

<b> In Kubernetes, a Service is a method for exposing a network application that is running as one or more Pods in your cluster. </b>

<img src="https://assets-global.website-files.com/622642781cd7e96ac1f66807/62d0ef40c5c447258d6d711d_nik8t90VaFPFx1zTrKdTyqVKXaXQVH8VCeXbcbw-tuxNbJeOOc0SnnqDQakRgOBv_U-0fx1Yu8wE3zdhgoqdJrApfD3OajtagGqyCFHFokxVzRuHtdoqgMZ3Ym07ZXNWaH_o2CM2pXnZRaUdxQ.png" alt="Deployments">

https://kubernetes.io/docs/concepts/services-networking/service/

## Types of services:
### ClusterIP
Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster. This is the default that is used if you don't explicitly specify a type for a Service. You can expose the Service to the public internet using an Ingress or a Gateway.
### NodePort
Exposes the Service on each Node's IP at a static port (the NodePort). To make the node port available, Kubernetes sets up a cluster IP address, the same as if you had requested a Service of type: ClusterIP.
### LoadBalancer
Exposes the Service externally using an external load balancer. Kubernetes does not directly offer a load balancing component; you must provide one, or you can integrate your Kubernetes cluster with a cloud provider.
### ExternalName
Maps the Service to the contents of the externalName field (for example, to the hostname api.foo.bar.example). The mapping configures your cluster's DNS server to return a CNAME record with that external hostname value. No proxying of any kind is set up.

| Term       | Description                                                                                                 
|------------|-------------------------------------------------------------------------------------------------------------
| targetPort | The port on which the actual pod is listening and where the service should forward traffic to.             
| port       | The port on which the service is exposed within the cluster. It is the port you use to access the service. 
| nodePort   | (Optional) Exposes the service on a static port on each node in the cluster.                               

## To run code 
1. clone this repo 
2. cd Services
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


