# k8s-demo
## Kind
1. `kind create cluster --config=config.yaml`

## Helm for Postgres

1. `helm repo add bitnami https://charts.bitnami.com/bitnami`
2. `helm repo update`
3. `helm install my-release bitnami/postgresql`
4. `kubectl get services`

## Run Deployment

1. `kubectl apply -f manifests/backend.yaml`
2. `kubectl apply -f manifests/frontend.yaml`

## Port Forward (Optional)
1. `ssh -L 3000:localhost:30001 {user}@{host}`
