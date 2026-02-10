import profile from './profile'

const projects = {
    heading: 'Featured Repositories',
    githubUsername: profile.githubUsername,
    limit: 6,
    list: [
        {
            label: 'Featured Project',
            title: 'Solana PumpFun Indexer',
            description: 'High-performance indexer for Solana blockchain data, optimized for speed and reliability.',
            techs: ['Rust', 'Solana', 'Indexer'],
            url: 'https://github.com/AkarshSahlot/pumpfun_indexer' // Placeholder URL based on pattern
        },
        {
            label: 'Featured Project',
            title: 'Stellar Smart Contract',
            description: 'Secure and efficient smart contracts built on the Stellar network using Soroban.',
            techs: ['Rust', 'Soroban', 'Stellar'],
            url: 'https://github.com/AkarshSahlot' // Placeholder
        },
        {
            label: 'Featured Project',
            title: 'Dynamic Marketplace Engine',
            description: 'Real-time pricing and order matching engine for high-frequency trading platforms.',
            techs: ['React', 'Node.js', 'WebSockets'],
            url: 'https://github.com/AkarshSahlot' // Placeholder
        }
    ],
}

export default projects
