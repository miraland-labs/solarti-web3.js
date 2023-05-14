const endpoint = {
  http: {
    // MI: replace Solana with Miraland as default
    // devnet: 'http://api.devnet.solana.com',
    // testnet: 'http://api.testnet.solana.com',
    // 'mainnet-beta': 'http://api.mainnet-beta.solana.com/',
    devnet: 'http://api.devnet-mln.miraland.top',
    testnet: 'http://api.testnet-mln.miraland.top',
    'mainnet-beta': 'http://api.mainnet-mln.miraland.top/',
    // Solarti
    'devnet-slrt': 'http://api.devnet-slrt.solarti.top',
    'testnet-slrt': 'http://api.testnet-slrt.solarti.top',
    'mainnet-slrt': 'http://api.mainnet-slrt.solarti.top',
    // Qthor
    'devnet-qth': 'http://api.devnet-qth.qthor.top',
    'testnet-qth': 'http://api.testnet-qth.qthor.top',
    'mainnet-qth': 'http://api.mainnet-qth.qthor.top',
    // Mira
    'devnet-mira': 'http://api.devnet-mira.arcaps.com',
    'testnet-mira': 'http://api.testnet-mira.arcaps.com',
    'mainnet-mira': 'http://api.mainnet-mira.arcaps.com',
    // Miraland
    'devnet-mln': 'http://api.devnet-mln.miraland.top',
    'testnet-mln': 'http://api.testnet-mln.miraland.top',
    'mainnet-mln': 'http://api.mainnet-mln.miraland.top',
  },
  https: {
    // MI: replace Solana with Miraland as default
    // devnet: 'https://api.devnet.solana.com',
    // testnet: 'https://api.testnet.solana.com',
    // 'mainnet-beta': 'https://api.mainnet-beta.solana.com/',
    devnet: 'https://api.devnet-mln.miraland.top',
    testnet: 'https://api.testnet-mln.miraland.top',
    'mainnet-beta': 'https://api.mainnet-mln.miraland.top/',
    // Solarti
    'devnet-slrt': 'https://api.devnet-slrt.solarti.top',
    'testnet-slrt': 'https://api.testnet-slrt.solarti.top',
    'mainnet-slrt': 'https://api.mainnet-slrt.solarti.top',
    // Qthor
    'devnet-qth': 'https://api.devnet-qth.qthor.top',
    'testnet-qth': 'https://api.testnet-qth.qthor.top',
    'mainnet-qth': 'https://api.mainnet-qth.qthor.top',
    // Mira
    'devnet-mira': 'https://api.devnet-mira.arcaps.com',
    'testnet-mira': 'https://api.testnet-mira.arcaps.com',
    'mainnet-mira': 'https://api.mainnet-mira.arcaps.com',
    // Miraland
    'devnet-mln': 'https://api.devnet-mln.miraland.top',
    'testnet-mln': 'https://api.testnet-mln.miraland.top',
    'mainnet-mln': 'https://api.mainnet-mln.miraland.top',
  },
};

export type Cluster =
    | 'devnet'
    | 'testnet'
    | 'mainnet-beta'
    | 'devnet-slrt'
    | 'testnet-slrt'
    | 'mainnet-slrt'
    | 'devnet-qth'
    | 'testnet-qth'
    | 'mainnet-qth'
    | 'devnet-mira'
    | 'testnet-mira'
    | 'mainnet-mira'
    | 'devnet-mln'
    | 'testnet-mln'
    | 'mainnet-mln';

/**
 * Retrieves the RPC API URL for the specified cluster
 */
export function clusterApiUrl(cluster?: Cluster, tls?: boolean): string {
  const key = tls === false ? 'http' : 'https';

  if (!cluster) {
    return endpoint[key]['mainnet-mln'];
  }

  const url = endpoint[key][cluster];
  if (!url) {
    throw new Error(`Unknown ${key} cluster: ${cluster}`);
  }
  return url;
}
