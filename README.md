# DataMorph

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

![License](https://img.shields.io/github/license/YashashavGoyal/datamorph?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/YashashavGoyal/datamorph?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/YashashavGoyal/datamorph?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/YashashavGoyal/datamorph?style=for-the-badge)
![Docker Pulls](https://img.shields.io/docker/pulls/yashashavgoyal/datamorph?style=for-the-badge&logo=docker&logoColor=white)

<div align="center">
  <img src="screenshots/datamorph-home.png" alt="DataMorph Deployed on AWS EC2" width="100%" />
  <p><em>Deployed on AWS EC2</em></p>
</div>

DataMorph is a privacy-focused developer tool for converting and validating data formats like JSON, YAML, XML, and TOML. It runs entirely in your browser, so your data never leaves your device.

## How It Works

DataMorph uses a **Client-Side Architecture**. It downloads the necessary code once and then processes everything locally on your computer.

```mermaid
flowchart TD
    %% Nodes
    User([👤 User])
    CDN[("☁️ Vercel CDN")]
    
    subgraph Client ["💻 Client-Side Runtime"]
        direction TB
        Shell["🛡️ App Shell"]
        Editor["📝 Monaco Editor"]
        Engine["⚙️ Conversion Engine"]
    end

    %% Edges
    CDN -.->|1. Delivers Assets| Shell
    User ==>|2. Types Code| Editor
    Editor <==>|3. Real-time JSON/YAML/XML| Engine

    %% Styling
    classDef plain fill:#1a1a1a,stroke:#fff,color:#fff;
    classDef highlight fill:#22226e,stroke:#f2f0f0,stroke-width:2px,color:#fff;
    classDef secondary fill:#2d2d2d,stroke:#666,color:#eee;

    class User,CDN plain;
    class Shell,Editor secondary;
    class Engine highlight;
    style Client fill:transparent,stroke:#333,color:#ccc,stroke-dasharray: 5 5
```

## Features

- **Real-Time Conversion**: Instantly convert between formats as you type.
  <img src="screenshots/datamorph-converter.png" alt="Real-time Conversion" width="800" />
- **Privacy First**: 100% client-side processing. Zero data opacity.
- **Validation**: Instant syntax checking for JSON, YAML, XML, and TOML.
  <img src="screenshots/datamorph-validator.png" alt="Validator" width="800" />
- **Modern UI**: Dark mode, glassmorphism, and responsive design.

## Future Scope

- **More Formats**: Support for CSV, Protobuf, and GraphQL SDL.
- **File Upload**: Drag-and-drop file conversion.
- **API Generation**: Generate TypeScript interfaces or Go structs from JSON.
- **PWA Support**: Install as a Progressive Web App for offline use.
- **Theme Toggle**: Light/Dark mode switcher.

## 🚀 DevOps & Deployment

We have professionalized the deployment pipeline using **GitHub Actions** and **Docker**, ensuring a robust CI/CD process.

### 🔄 CI/CD Pipeline (GitHub Actions)

Our pipeline fully automates the testing, building, and deployment process:

1.  **Test**: Runs `npm run lint` to ensure code quality.
2.  **Build**: Creates a optimized Docker image using a multi-stage build.
3.  **Deploy**: Automatically deploys the new container to our **AWS EC2** instance upon any push to main or any tag push (vx.y.z) with a manual approval.

![GitHub Actions Workflow](screenshots/workflow.png)

### 🐳 Docker Containerization

We use a **Multi-Stage Docker Build** to ensure our production images are:
-   **Lightweight**: Only essential artifacts are copied to the final image (based on `node:20-alpine`).
-   **Secure**: The app runs as a non-root user (`nextjs`).
-   **Efficient**: Dependencies are cached effectively.

**Official Docker Image**: [yashashavgoyal/datamorph](https://hub.docker.com/r/yashashavgoyal/datamorph)

<div align="center">
  <img src="screenshots/docker-hub.png" alt="Docker Hub Repository" width="800" />
</div>

#### Verification

You can verify the running container on our AWS EC2 instance:
![AWS EC2 Docker Process](screenshots/aws-ec2-ubuntu.png)

### 📈 Monitoring & Future Roadmap

- [x] **CI/CD Pipeline**: GitHub Actions for automated linting and deployment.
- [x] **Containerization**: Dockerfile with multi-stage builds.
- [ ] **Unit Tests**: Integrate Jest/Vitest.
- [ ] **E2E Tests**: Integrate Playwright.
- [ ] **Monitoring**: Integrate Sentry and Vercel Analytics.

### Prerequisites

-   Use a modern package manager like `npm`, `yarn`, or `pnpm`.
-   **Node.js**: v18 or higher is recommended.

### Installation & Run

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/YashashavGoyal/datamorph.git
    cd datamorph
    ```

2.  **Install dependencies**:
    ```bash
    npm ci
    # or
    npm install
    ```

### Development

Run the development server to see changes in real-time:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production

To build the application for production usage:

1.  **Build the application**:
    ```bash
    npm run build
    ```

2.  **Start the production server**:
    ```bash
    npm start
    ```

The application is now optimized and ready for deployment.

## 📂 Modular Code Structure
```bash
├── app/
│   ├── (src)/               # Application Routes
│   ├── components/
│   │   ├── shell/           # Core Editors (State Orchestration)
│   │   ├── editor/          # Third-party Integrations (Monaco)
│   │   └── ui/              # Design System (Atomic Components)
│   └── lib/
│       ├── converters.ts    # Logic: Pure functions (Unit Testable)
│       └── hooks/           # Logic: React Custom Hooks
```

---

**Author**: Yashashav Goyal

<a href="https://github.com/YashashavGoyal">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</a>
<a href="https://linkedin.com/in/yashashavgoyal">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
</a>
<a href="https://twitter.com/YashashavGoyal">
  <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
</a>

**License**: MIT