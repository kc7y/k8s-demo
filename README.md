# k8s-demo
## Minikube
1. [Install Minikube](https://minikube.sigs.k8s.io/docs/start/)
   1. Depending on your OS, you may need to [install Docker](https://docs.docker.com/get-docker/)
2. `minikube start`
3. `minikube tunnel`

## Helm for Postgres

1. [Install Helm](https://helm.sh/docs/intro/install/) (`brew install helm` on osx)
2. `helm init`
3. `helm repo add bitnami https://charts.bitnami.com/bitnami`
5. `helm repo update`
6. `helm install stable/postgresql -n my-release`
7. `k get services`

## Run Deployment

1. `kubectl apply -f manifests/backend.yaml`
2. Update the svc url in manifests/frontend.yaml (if you need to)
3. `kubectl apply -f manifests/frontend.yaml`

