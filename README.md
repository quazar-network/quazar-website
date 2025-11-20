# QUAZAR | Decentralized GPU Network & AI Infrastructure

Quazar is a high-performance blockchain and decentralized GPU network designed for autonomous finance (DeFi) and AI with privacy. This repository contains the source code for the official landing page and web application interface.

## 🚀 Project Overview

Quazar bridges the gap between blockchain smart contracts and advanced AI models. It enables:
- **Decentralized Compute:** Users can rent GPU power for AI training and inference.
- **AI Agents:** Autonomous agents that can manage funds and execute workflows on-chain.
- **Privacy:** TEE (Trusted Execution Environment) integration for secure data processing.
- **Mining:** "Proof-of-Compute" consensus mechanism rewarding GPU providers.

## ✨ Key Features

- **Interactive Hero Section:** 3D mouse-responsive animations simulating a Quazar active galactic nucleus.
- **Real-time Simulations:**
  - **Mining Demo:** Visualizes the ingestion, processing, and reward cycle of a GPU node.
  - **Protocol Visualization:** Step-by-step animation of the consensus engine and transaction settlement.
  - **AI Agent Network:** Interactive SVG diagram showing agent-to-chain communication.
- **Ecosystem Showcase:** Interactive mockups for Users (Wallet), Miners (Hardware), and Developers (IDE).
- **Dynamic Roadmap:** Scroll-triggered progression line and card reveal animations.
- **Legal Compliance:** Fully integrated Terms of Use, Privacy Policy, and Cookie Notice pages with consent management.

## 🛠 Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charts:** [Recharts](https://recharts.org/)
- **Fonts:** Inter & Albert Sans (via Google Fonts)

## 📂 Project Structure

```
/
├── components/          # React components
│   ├── Hero.tsx         # Main landing visual with 3D animation
│   ├── Features.tsx     # Core technology grid
│   ├── Ecosystem.tsx    # Interactive tabs (Wallet, Mining, Devs)
│   ├── MiningDemo.tsx   # GPU processing simulation
│   ├── QuazarProtocol.tsx # Consensus engine visualization
│   ├── AiAgents.tsx     # Agent network diagram
│   ├── Roadmap.tsx      # Scroll-based timeline
│   └── ...              # Legal pages (Terms, Privacy, Cookies)
├── assets/              # Static assets (images, SVGs)
├── types.ts             # TypeScript definitions
├── App.tsx              # Main layout and routing configuration
├── index.tsx            # Entry point
├── index.html           # SEO meta tags and dependencies
└── README.md            # Documentation
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📄 License

© 2025 Quazar Network. All rights reserved.
