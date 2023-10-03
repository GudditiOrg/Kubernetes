# Kubernetes
## API Versions:
`$ kubectl api-resources`
```YAML

NAME                              SHORTNAMES   APIVERSION                             NAMESPACED   KIND
bindings                                       v1                                     true         Binding
componentstatuses                 cs           v1                                     false        ComponentStatus
configmaps                        cm           v1                                     true         ConfigMap
endpoints                         ep           v1                                     true         Endpoints
events                            ev           v1                                     true         Event
limitranges                       limits       v1                                     true         LimitRange
namespaces                        ns           v1                                     false        Namespace
nodes                             no           v1                                     false        Node
persistentvolumeclaims            pvc          v1                                     true         PersistentVolumeClaim
persistentvolumes                 pv           v1                                     false        PersistentVolume
pods                              po           v1                                     true         Pod
podtemplates                                   v1                                     true         PodTemplate
replicationcontrollers            rc           v1                                     true         ReplicationController
resourcequotas                    quota        v1                                     true         ResourceQuota
secrets                                        v1                                     true         Secret
serviceaccounts                   sa           v1                                     true         ServiceAccount
services                          svc          v1                                     true         Service
mutatingwebhookconfigurations                  admissionregistration.k8s.io/v1        false        MutatingWebhookConfiguration
validatingwebhookconfigurations                admissionregistration.k8s.io/v1        false        ValidatingWebhookConfiguration
customresourcedefinitions         crd,crds     apiextensions.k8s.io/v1                false        CustomResourceDefinition
apiservices                                    apiregistration.k8s.io/v1              false        APIService
controllerrevisions                            apps/v1                                true         ControllerRevision
daemonsets                        ds           apps/v1                                true         DaemonSet
deployments                       deploy       apps/v1                                true         Deployment
replicasets                       rs           apps/v1                                true         ReplicaSet
statefulsets                      sts          apps/v1                                true         StatefulSet
tokenreviews                                   authentication.k8s.io/v1               false        TokenReview
localsubjectaccessreviews                      authorization.k8s.io/v1                true         LocalSubjectAccessReview
selfsubjectaccessreviews                       authorization.k8s.io/v1                false        SelfSubjectAccessReview
selfsubjectrulesreviews                        authorization.k8s.io/v1                false        SelfSubjectRulesReview
subjectaccessreviews                           authorization.k8s.io/v1                false        SubjectAccessReview
horizontalpodautoscalers          hpa          autoscaling/v2                         true         HorizontalPodAutoscaler
cronjobs                          cj           batch/v1                               true         CronJob
jobs                                           batch/v1                               true         Job
certificatesigningrequests        csr          certificates.k8s.io/v1                 false        CertificateSigningRequest
leases                                         coordination.k8s.io/v1                 true         Lease
endpointslices                                 discovery.k8s.io/v1                    true         EndpointSlice
events                            ev           events.k8s.io/v1                       true         Event
wasmplugins                                    extensions.istio.io/v1alpha1           true         WasmPlugin
flowschemas                                    flowcontrol.apiserver.k8s.io/v1beta3   false        FlowSchema
prioritylevelconfigurations                    flowcontrol.apiserver.k8s.io/v1beta3   false        PriorityLevelConfiguration
istiooperators                    iop,io       install.istio.io/v1alpha1              true         IstioOperator
destinationrules                  dr           networking.istio.io/v1beta1            true         DestinationRule
envoyfilters                                   networking.istio.io/v1alpha3           true         EnvoyFilter
gateways                          gw           networking.istio.io/v1beta1            true         Gateway
proxyconfigs                                   networking.istio.io/v1beta1            true         ProxyConfig
serviceentries                    se           networking.istio.io/v1beta1            true         ServiceEntry
sidecars                                       networking.istio.io/v1beta1            true         Sidecar
virtualservices                   vs           networking.istio.io/v1beta1            true         VirtualService
workloadentries                   we           networking.istio.io/v1beta1            true         WorkloadEntry
workloadgroups                    wg           networking.istio.io/v1beta1            true         WorkloadGroup
ingressclasses                                 networking.k8s.io/v1                   false        IngressClass
ingresses                         ing          networking.k8s.io/v1                   true         Ingress
networkpolicies                   netpol       networking.k8s.io/v1                   true         NetworkPolicy
runtimeclasses                                 node.k8s.io/v1                         false        RuntimeClass
poddisruptionbudgets              pdb          policy/v1                              true         PodDisruptionBudget
clusterrolebindings                            rbac.authorization.k8s.io/v1           false        ClusterRoleBinding
clusterroles                                   rbac.authorization.k8s.io/v1           false        ClusterRole
rolebindings                                   rbac.authorization.k8s.io/v1           true         RoleBinding
roles                                          rbac.authorization.k8s.io/v1           true         Role
priorityclasses                   pc           scheduling.k8s.io/v1                   false        PriorityClass
authorizationpolicies                          security.istio.io/v1                   true         AuthorizationPolicy
peerauthentications               pa           security.istio.io/v1beta1              true         PeerAuthentication
requestauthentications            ra           security.istio.io/v1                   true         RequestAuthentication
csidrivers                                     storage.k8s.io/v1                      false        CSIDriver
csinodes                                       storage.k8s.io/v1                      false        CSINode
csistoragecapacities                           storage.k8s.io/v1                      true         CSIStorageCapacity
storageclasses                    sc           storage.k8s.io/v1                      false        StorageClass
volumeattachments                              storage.k8s.io/v1                      false        VolumeAttachment
telemetries                       telemetry    telemetry.istio.io/v1alpha1            true         Telemetry


```


# Istio Installation: 

### what is Istio:
Istio, an open-source service mesh, integrates into existing distributed applications, offering uniform security, connectivity, and monitoring. It enables load balancing, secure communication, and traffic control without extensive coding. Its control plane provides features like encryption, routing rules, and metrics, making Istio versatile and capable of complex deployments. Istio runs on Kubernetes and has a diverse ecosystem of contributors and integrations. You can install Istio or use vendor products for management. 
https://istio.io/latest/docs/setup/getting-started/#download

<li> Go to the Istio release https://github.com/istio/istio/releases/, page to download the installation file for your OS, or download and extract the latest release automatically (Linux or macOS):
<li> Move to the Istio package directory. For example, if the package is istio-1.18.2:<br>

`cd istio-1.18.2 `
<li> Add the istioctl client to your path (Linux or macOS): and set env in Windows using env <br>

`export PATH=$PWD/bin:$PATH`
## Install Istio
<li> For this installation, we use the demo configuration profilehttps://istio.io/latest/docs/setup/additional-setup/config-profiles/. It’s selected to have a good set of defaults for testing, but there are other profiles for production or performance testing.<br>

`istioctl install --set profile=demo -y`
<li> Add a namespace label to instruct Istio to automatically inject Envoy sidecar proxies when you deploy your application later:<br>

`kubectl label namespace default istio-injection=enabled`
### Dashboards
```Bash

istioctl dashboard kiali &
istioctl dashboard grafana &
istioctl dashboard jaeger &
istioctl dashboard prometheus &

```

# argo-cd
<li> official documentation : https://argo-cd.readthedocs.io/en/stable/
### Installation:

```Bash
    #Add repository
    helm repo add argo https://argoproj.github.io/argo-helm
    #Install chart
    helm install my-argo-cd argo/argo-cd --version 5.46.7
    #port-forward
    kubectl port-forward service/my-argo-cd-argocd-server -n default 8080:443
    #passcode
    kubectl -n default get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```
