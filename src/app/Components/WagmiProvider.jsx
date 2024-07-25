"use client";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, goerli, sepolia, bscTestnet } from "wagmi/chains";

export function WagmiProviders({ children }) {
  const projectId = "bc73d7505fd406159d095af056d4f4d4";

  const data = {
    name: "Web3Modal",
    description: "Web3Modal Example",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  };

  const chains = [goerli, mainnet, arbitrum, sepolia, bscTestnet];

  const wagmiConfig = defaultWagmiConfig({ chains, projectId, data });
  createWeb3Modal({ wagmiConfig, projectId, chains });

  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
