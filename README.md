# Kubernetes

![Kubernetes](https://github.com/GudditiOrg/Kubernetes/assets/87116202/da0952a2-8070-4d8e-976c-13661720dcbf)

- [Introduction about Kubernetes](https://gudditiorg.github.io/Kubernetes/introduction)
- [Introduction about Pods](https://github.com/GudditiOrg/Kubernetes/tree/main/pods)
  - [Pod To Pod Communication](https://github.com/GudditiOrg/Kubernetes/tree/main/PodToPod-Communication) 
- [Introduction about ReplicaSet](https://github.com/GudditiOrg/Kubernetes/tree/main/replicaset)
- [Introduction about Deployments](https://github.com/GudditiOrg/Kubernetes/blob/main/deployments)
- [Introduction to ConfigMap](https://github.com/GudditiOrg/Kubernetes/tree/main/configmap)
- [Introduction to Secrets](https://github.com/GudditiOrg/Kubernetes/tree/main/secrets)





# Istio Installation: 

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
