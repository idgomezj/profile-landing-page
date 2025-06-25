# Profile AI Helm Chart

A Helm chart for deploying the Profile AI solution - an open-source profile AI solution developed by Ivan Gomez Jimenez.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)

## 🔧 Prerequisites

Before installing this Helm chart, ensure you have:

- **Kubernetes cluster** (v1.19+)
- **Helm** (v3.0+)
- **kubectl** configured to communicate with your cluster

### Installing Helm

#### 🍎 macOS (via Homebrew)

```bash
brew install helm
```

#### 🐧 Linux (script install)

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

Or use package managers:

```bash
# Ubuntu/Debian
sudo apt-get update && sudo apt-get install helm

# CentOS/RHEL
sudo yum install helm

# Snap
sudo snap install helm --classic
```

#### 🪟 Windows

```powershell
# Using Chocolatey
choco install kubernetes-helm

# Using Scoop
scoop install helm
```

#### ✅ Verify Installation

```bash
helm version
```

Expected output:

```
version.BuildInfo{Version:"v3.14.0", GitCommit:"...", GitTreeState:"...", GoVersion:"go1.21.0"}
```

## 🚀 Installation

### Quick Start
```bash
# Add the repository (if using a remote repo)
helm repo add profile-ai https://your-repo-url

# Install the chart
helm install profile-ai ./helm -f values.yaml
```

### Local Installation
```bash
# Install from local chart directory
helm install profile-ai ./helm -f values.yaml

# Or with custom values
helm install profile-ai ./helm -f values.yaml --set namespace=my-namespace
```

### Upgrade Existing Installation
```bash
helm upgrade profile-ai ./helm -f values.yaml
```

## ⚙️ Configuration

### Values File Structure

The chart uses the following configuration structure in `values.yaml`:

```yaml
# Global namespace for all resources
namespace: idgomezj

# Override the full name of the application
fullnameOverride: "Profile AI"

# Host domain for ingress configuration
host: "idgomezj.com"

# Frontend configuration
frontend:
  # API URL for frontend to backend communication
  api_url: ""

# Backend configuration
backend:
  # API key for external services
  api_key: ""
  # AI model name to use
  model_name: "gemini-2.0-flash"
  # AI provider (e.g., gemini, openai)
  provider: "gemini"
  # Frontend allowlist for CORS
  frontend_list: ""
```

### Configuration Variables

#### Global Variables

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `namespace` | string | `"idgomezj"` | Kubernetes namespace where resources will be deployed |
| `fullnameOverride` | string | `"Profile AI"` | Override the full name of the application |
| `host` | string | `"idgomezj.com"` | Domain name for ingress configuration |

#### Frontend Configuration

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `frontend.api_url` | string | `""` | URL for the backend API that the frontend will communicate with |

#### Backend Configuration

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `backend.api_key` | string | `""` | API key for external AI services |
| `backend.model_name` | string | `"gemini-2.0-flash"` | Name of the AI model to use |
| `backend.provider` | string | `"gemini"` | AI service provider (gemini, openai, etc.) |
| `backend.frontend_list` | string | `""` | Comma-separated list of allowed frontend origins for CORS |

### Custom Values Example

Create a custom `my-values.yaml`:

```yaml
namespace: my-profile-ai
host: "myapp.example.com"

frontend:
  api_url: "https://api.myapp.example.com"

backend:
  api_key: "your-secret-api-key"
  model_name: "gpt-4"
  provider: "openai"
  frontend_list: "https://myapp.example.com,https://www.myapp.example.com"
```

## 🛠️ Usage

### Deploy with Custom Values
```bash
helm install profile-ai ./helm -f my-values.yaml
```

### Instal IDGOMEZJ HELM
```bash
helm repo add profile-ai https://idgomezj.github.io/profile-landing-page/helm-repo
```

### Validate Chart Template
```bash
# Validate the chart template without installing
helm template profile-ai ./helm -f values.yaml --debug

# Output to file for inspection
helm template profile-ai ./helm -f values.yaml > deployment.yaml
```

### Check Installation Status
```bash
# List all releases
helm list

# Get release status
helm status profile-ai

# Get release values
helm get values profile-ai
```

### Uninstall
```bash
helm uninstall profile-ai
```

## 🔍 Troubleshooting

### Common Issues

#### 1. Template Validation
If you encounter template errors, validate your YAML:
```bash
helm template . --debug
```

#### 2. Check Pod Status
```bash
kubectl get pods -n idgomezj
kubectl describe pod <pod-name> -n idgomezj
```

#### 3. Check Logs
```bash
# Frontend logs
kubectl logs -f deployment/profile-ai-frontend -n idgomezj

# Backend logs
kubectl logs -f deployment/profile-ai-backend -n idgomezj
```

#### 4. Check Services
```bash
kubectl get svc -n idgomezj
kubectl get ingress -n idgomezj
```

### Debug Commands

```bash
# Dry run installation
helm install profile-ai ./helm -f values.yaml --dry-run --debug

# Validate chart
helm lint ./helm

# Check dependencies
helm dependency list ./helm
```

## 📁 Chart Structure

```
helm/
├── Chart.yaml          # Chart metadata
├── values.yaml         # Default configuration values
├── README.md           # This file
├── LICENSE             # License information
├── .helmignore         # Files to ignore during packaging
├── charts/             # Chart dependencies
└── templates/          # Kubernetes manifests
    ├── _helpers.tpl    # Template helpers
    ├── namespace.yaml  # Namespace definition
    ├── frontend/       # Frontend resources
    │   ├── deployment.yaml
    │   ├── service.yaml
    │   └── ingressRoute.yaml
    └── backend/        # Backend resources
        ├── deployment.yaml
        ├── service.yaml
        └── ingressRoute.yaml
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `helm template` and `helm lint`
5. Submit a pull request

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

---

**Note**: Make sure to replace sensitive values like API keys with proper Kubernetes secrets in production environments.