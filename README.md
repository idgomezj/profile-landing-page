# Personal Profile Landing Page with AI Agent

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-13.0+-black?style=for-the-badge&logo=next.js)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-green?style=for-the-badge&logo=fastapi)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Kubernetes](https://img.shields.io/badge/Kubernetes-1.19+-326CE5?style=for-the-badge&logo=kubernetes)
![Helm](https://img.shields.io/badge/Helm-3.0+-0F1689?style=for-the-badge&logo=helm)

**A modern, AI-powered personal profile landing page with intelligent conversation capabilities**

[Live Demo](https://idgomezj.com) • [Documentation](https://github.com/idgomezj/profile-landing-page/wiki) • [Issues](https://github.com/idgomezj/profile-landing-page/issues)

</div>

---

<div align="center">
  <img src="https://thesccleaning.com/wp-content/uploads/2025/06/Screenshot-2025-06-24-at-8.06.51 PM.png" alt="idgomezj Banner" width="2000px">
</div>

## 🚀 Overview

This repository contains a full-stack application showcasing my personal profile with an integrated AI agent. The frontend is built with **Next.js** and styled using **Tailwind CSS**, presenting my background, experience, and projects in a clean and responsive interface.

A lightweight **FastAPI** backend powers an intelligent AI agent, allowing users to ask questions about my profile and receive context-aware, personalized answers. This demonstrates how AI can enhance user interaction by providing a dynamic and engaging experience.

## ✨ Features

- **🎨 Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **🤖 AI-Powered Chat**: Intelligent conversation agent using Pydantic-AI
- **📱 Mobile-First**: Fully responsive across all devices
- **⚡ Fast Performance**: Optimized with Next.js best practices
- **🐳 Containerized**: Docker-ready for easy deployment
- **☸️ Kubernetes Native**: Complete Helm chart for production deployment
- **🔒 Secure**: Environment-based configuration and API key management

## 🛠️ Tech Stack

### Frontend
- **Next.js 13+** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **React Hook Form** - Form handling and validation

### Backend
- **FastAPI** - Modern Python web framework
- **Pydantic-AI** - AI integration and conversation management
- **Uvicorn** - ASGI server
- **Python 3.9+** - Runtime environment

### DevOps & Deployment
- **Docker** - Containerization
- **Kubernetes** - Container orchestration
- **Helm** - Kubernetes package manager
- **GitHub Actions** - CI/CD pipeline

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [Helm Chart](#helm-chart)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## ⚡ Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Python 3.9+
- Docker (optional)
- Kubernetes cluster (for production)

### Local Development
```bash
# Clone the repository
git clone https://github.com/idgomezj/profile-landing-page.git
cd profile-landing-page

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
pip install -r requirements.txt
cd ..

# Start development servers
npm run dev          # Frontend (http://localhost:3000)
npm run dev:backend  # Backend (http://localhost:8000)
```

## 🚀 Installation

### Option 1: Docker Compose (Recommended for Development)

```bash
# Clone and navigate to project
git clone https://github.com/idgomezj/profile-landing-page.git
cd profile-landing-page

# Start with Docker Compose
docker-compose up -d

# Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

### Option 2: Manual Installation

#### Frontend Setup
```bash
# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Start development server
npm run dev
```

#### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables
cp .env.example .env
# Edit .env with your API keys and configuration

# Start the server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## ⚙️ Configuration

### Environment Variables

#### Frontend (.env.local)
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Backend (.env)
```bash
# AI Configuration
AI_PROVIDER=gemini
AI_MODEL_NAME=gemini-2.0-flash
AI_API_KEY=your_api_key_here

# CORS Configuration
FRONTEND_URL=http://localhost:3000
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com

# Server Configuration
HOST=0.0.0.0
PORT=8000
DEBUG=true
```

### AI Provider Configuration

The application supports multiple AI providers:

- **Google Gemini** (default)
- **OpenAI GPT**
- **Anthropic Claude**

Configure your preferred provider in the backend `.env` file.

## 🛠️ Development

### Project Structure

**Creat HELM PAckage**
```
helm package ./helm -d ./helm-repo
```

**Public HELM**
```
helm repo index . --url https://<your-username>.github.io/helm-charts
git add .
git commit -m "Update chart"
git push
```

**Use HELM**
```
helm repo add profile-ai https://idgomezj.github.io/profile-landing-page/helm-repo
```

### Available Scripts

#### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

#### Backend
```bash
npm run dev:backend  # Start backend development server
npm run test:backend # Run backend tests
```

## 🚀 Deployment

### Docker Deployment
```bash
# Build and run with Docker
docker build -t profile-ai .
docker run -p 3000:3000 -p 8000:8000 profile-ai
```

### Kubernetes Deployment with Helm

#### Install from Helm Repository
```bash
# Add the Helm repository
helm repo add profile-ai https://idgomezj.github.io/profile-landing-page/helm-repo

# Install the chart
helm install profile-ai profile-ai/profile-ai -f values.yaml
```

#### Local Helm Chart
```bash
# Install from local chart
helm install profile-ai ./helm -f values.yaml

# Upgrade existing installation
helm upgrade profile-ai ./helm -f values.yaml
```

## ☸️ Helm Chart

This project includes a complete Helm chart for Kubernetes deployment. See the [Helm Chart Documentation](./helm/README.md) for detailed information.

### Quick Helm Commands

```bash
# Package the chart
helm package ./helm -d ./helm-repo

# Update repository index
helm repo index ./helm-repo --url https://idgomezj.github.io/profile-landing-page/helm-repo

# Install from repository
helm repo add profile-ai https://idgomezj.github.io/profile-landing-page/helm-repo
helm install profile-ai profile-ai/profile-ai
```

### Publishing Helm Chart
```bash
# Update repository index
helm repo index ./helm-repo --url https://idgomezj.github.io/profile-landing-page/helm-repo

# Commit and push changes
git add .
git commit -m "Update Helm chart v0.1.0"
git push origin main
```

## 📚 API Documentation

### Endpoints

- **GET** `/` - Health check
- **POST** `/api/chat` - AI conversation endpoint
- **GET** `/docs` - Interactive API documentation (Swagger UI)

### Chat API Example
```bash
curl -X POST "http://localhost:8000/api/chat" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "Tell me about your experience",
       "context": "user_profile"
     }'
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

### Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🐛 Troubleshooting

### Common Issues

#### Frontend Issues
```bash
# Clear Next.js cache
rm -rf .next
npm run dev

# Check for dependency issues
npm audit fix
```

#### Backend Issues
```bash
# Check Python environment
python --version
pip list

# Verify API keys
echo $AI_API_KEY
```

#### Docker Issues
```bash
# Rebuild containers
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

#### Helm Issues
```bash
# Validate chart
helm lint ./helm

# Dry run installation
helm install profile-ai ./helm --dry-run --debug
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing React framework
- **FastAPI** community for the excellent Python web framework
- **Tailwind CSS** for the utility-first CSS framework
- **Pydantic-AI** for AI integration capabilities

## 📞 Contact

- **Author**: Ivan Gomez Jimenez
- **Website**: [idgomezj.com](https://idgomezj.com)
- **GitHub**: [@idgomezj](https://github.com/idgomezj)
- **LinkedIn**: [Ivan Gomez Jimenez](https://linkedin.com/in/idgomezj)

---

<div align="center">

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Ivan Gomez Jimenez](https://github.com/idgomezj)

</div>