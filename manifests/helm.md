# Helm for Postgres

1. `helm repo add bitnami https://charts.bitnami.com/bitnami`
2. `helm repo update`
3. `helm install my-release bitnami/postgresql`
4. `kubectl get services`

# Run Deployment

1. `kubectl apply -f deployment.yaml`
2. `kubectl port-forward --namespace default svc/backend 3001:3001 &`
