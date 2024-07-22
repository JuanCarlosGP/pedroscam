import React, { ReactNode } from 'react';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Configurar el cliente de consulta
const queryClient = new QueryClient();

// Obtener el ID del proyecto desde WalletConnect Cloud
const projectId = '6fcecab0f94daeab19ee32b879fc1440';

// Crear la configuración de Wagmi
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};
const chains = [mainnet, arbitrum] as const;
const config = defaultWagmiConfig({ chains, projectId, metadata });

// Crear el modal de Web3
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true
});

// Proveer el contexto de Wagmi en tu aplicación
export function Web3ModalProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// Componente principal de la aplicación
function App() {
  return (
    <Web3ModalProvider>
      <div className="App">
        <h1>🥵🥵</h1>
        <w3m-button />
      </div>
    </Web3ModalProvider>
  );
}

export default App;