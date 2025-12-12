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
- **Privacy First**: 100% client-side processing. Zero data opacity.
- **Validation**: Instant syntax checking for JSON, YAML, XML, and TOML.
- **Modern UI**: Dark mode, glassmorphism, and responsive design.

## Future Scope

- **More Formats**: Support for CSV, Protobuf, and GraphQL SDL.
- **File Upload**: Drag-and-drop file conversion.
- **API Generation**: Generate TypeScript interfaces or Go structs from JSON.
- **PWA Support**: Install as a Progressive Web App for offline use.
- **Theme Toggle**: Light/Dark mode switcher.

## ♾️ DevOps Integration Roadmap

To professionalize the deployment pipeline, the following DevOps practices can be integrated:

1.  **CI/CD Pipeline (GitHub Actions)**:
    -   Automate linting (`npm run lint`) and type checking on every Pull Request.
    -   Automatically deploy to Vercel Preview environments.

2.  **Containerization (Docker)**:
    -   Create a `Dockerfile` for self-hosted deployments.
    -   Use multi-stage builds to keep the image size small.

3.  **Testing Strategy**:
    -   **Unit Tests**: Use **Jest** or **Vitest** to test the `lib/converters.ts` logic.
    -   **E2E Tests**: Use **Playwright** to verify the user flow (typing in editor -> seeing output).

4.  **Monitoring**:
    -   Integrate **Sentry** for frontend error tracking.
    -   Use **Vercel Analytics** for performance metrics.

## 💻 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/YashashavGoyal/datamorph.git
    cd datamorph
    ```

2.  **Install dependencies**:
    ```bash
    npm ci
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open locally**:
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

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