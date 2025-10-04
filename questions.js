const questions = [
  {
    question: "What is Drosera primarily designed for?",
    answers: [
      { text: "Token swapping", correct: false },
      { text: "Decentralized security automation", correct: true },
      { text: "Price prediction", correct: false },
      { text: "Governance voting", correct: false }
    ],
    explanation: "Drosera provides a decentralized layer for protocol security and incident response."
  },
  {
    question: "Which blockchain is Drosera built on?",
    answers: [
      { text: "Bitcoin", correct: false },
      { text: "Polkadot", correct: false },
      { text: "Ethereum", correct: true },
      { text: "Solana", correct: false }
    ],
    explanation: "Drosera leverages Ethereum’s trust network and smart contract infrastructure."
  },
  {
    question: "What are “Traps” in Drosera?",
    answers: [
      { text: "Governance tokens", correct: false },
      { text: "Security infrastructure smart contracts", correct: true },
      { text: "Decentralized exchanges", correct: false },
      { text: "Voting mechanisms", correct: false }
    ],
    explanation: "Traps define instructions for incident detection and response."
  },
  {
    question: "Who performs incident response in Drosera?",
    answers: [
      { text: "Protocol owners only", correct: false },
      { text: "Centralized auditors", correct: false },
      { text: "Operators", correct: true },
      { text: "Liquidity providers", correct: false }
    ],
    explanation: "Operators run off-chain logic and execute incident response tasks."
  },
  {
    question: "What is the role of a Hydration Stream?",
    answers: [
      { text: "It stores smart contract code", correct: false },
      { text: "It distributes rewards to operators", correct: true },
      { text: "It monitors gas prices", correct: false },
      { text: "It executes emergency transactions", correct: false }
    ],
    explanation: "Hydration Streams allocate token rewards over time for Operators running Traps."
  },
  {
    question: "What is Bloom Boost used for?",
    answers: [
      { text: "Boosting token prices", correct: false },
      { text: "Prioritizing emergency response transactions", correct: true },
      { text: "Slashing malicious operators", correct: false },
      { text: "Automating staking rewards", correct: false }
    ],
    explanation: "Bloom Boost deposits ETH to increase the priority of emergency responses."
  },
  {
    question: "Drosera aims to leverage which kind of existing network?",
    answers: [
      { text: "Bitcoin’s trust network", correct: false },
      { text: "Ethereum’s trust network", correct: true },
      { text: "Solana validators", correct: false },
      { text: "Polygon sidechains", correct: false }
    ],
    explanation: "Drosera builds on Ethereum instead of creating a new trust network."
  },
  {
    question: "What percentage of Trap rewards is allocated to passive rewards per second?",
    answers: [
      { text: "10%", correct: false },
      { text: "20%", correct: false },
      { text: "50%", correct: false },
      { text: "70%", correct: true }
    ],
    explanation: "Passive rewards provide 70% of Trap rewards to operators over time."
  },
  {
    question: "Which of the following is an example of a real-world use case mentioned in the paper?",
    answers: [
      { text: "Uniswap price prediction", correct: false },
      { text: "Nomad hack incident mitigation", correct: true },
      { text: "Aave token issuance", correct: false },
      { text: "Curve yield optimization", correct: false }
    ],
    explanation: "Drosera could have helped mitigate the Nomad bridge hack."
  },
  {
    question: "How is consensus among Operators achieved for incident detection?",
    answers: [
      { text: "Majority vote off-chain", correct: true },
      { text: "Centralized approval", correct: false },
      { text: "Random selection", correct: false },
      { text: "Blockchain mining", correct: false }
    ],
    explanation: "Operators communicate peer-to-peer and reach ⅔ majority consensus."
  },
  {
    question: "In Drosera, what happens if ⅔ of Operators attest to a false incident detection?",
    answers: [
      { text: "Nothing, it’s ignored", correct: false },
      { text: "Operators are rewarded", correct: false },
      { text: "Operators can be slashed via SNARK proofs", correct: true },
      { text: "The protocol halts", correct: false }
    ],
    explanation: "Malicious attestations are penalized through slashing mechanisms."
  },
  {
    question: "What is the name of Drosera’s native token?",
    answers: [
      { text: "DRS", correct: false },
      { text: "DRO", correct: true },
      { text: "DRP", correct: false },
      { text: "DRT", correct: false }
    ],
    explanation: "DRO is used for rewards, staking, and creating Hydration Streams."
  },
  {
    question: "What is the purpose of staking DRO into the Harvester?",
    answers: [
      { text: "To increase gas fees", correct: false },
      { text: "To earn rewards and fund the protocol security budget", correct: true },
      { text: "To create Traps automatically", correct: false },
      { text: "To execute off-chain logic", correct: false }
    ],
    explanation: "Staked DRO generates rewards for operators and funds security infrastructure."
  },
  {
    question: "In Trap logic, which cryptographic method is used to aggregate Operator signatures?",
    answers: [
      { text: "RSA encryption", correct: false },
      { text: "SHA-256 hashing", correct: false },
      { text: "BLS signature aggregation", correct: true },
      { text: "ECDSA alone", correct: false }
    ],
    explanation: "BLS signatures allow compact, verifiable aggregation across Operators."
  },
  {
    question: "What is one of the main challenges in formal verification of multi-contract systems?",
    answers: [
      { text: "Lack of Ethereum support", correct: false },
      { text: "Complexity and high cost", correct: true },
      { text: "Incompatibility with Solidity", correct: false },
      { text: "Slow network propagation", correct: false }
    ],
    explanation: "Formal verification is expensive and impractical for modular multi-protocol systems."
  },
  {
    question: "What mechanism allows Drosera operators to signal a protocol compromise when no emergency function exists?",
    answers: [
      { text: "Hydration Stream", correct: false },
      { text: "Fire Signal Mechanism", correct: true },
      { text: "Bloom Boost", correct: false },
      { text: "Trap Rewards", correct: false }
    ],
    explanation: "The Fire Signal alerts the community when a protocol lacks built-in emergency functions."
  },
  {
    question: "How does Drosera propose to mitigate inactive or censoring Operators?",
    answers: [
      { text: "Ignoring them in calculations", correct: false },
      { text: "Penalizing them through slashing conditions", correct: true },
      { text: "Automatically rewarding them", correct: false },
      { text: "Letting protocols manually remove them", correct: false }
    ],
    explanation: "Slashing discourages inactivity or censorship and ensures network health."
  },
  {
    question: "What is the purpose of hiding a protocol’s security intents?",
    answers: [
      { text: "To reduce gas costs", correct: false },
      { text: "To prevent adversaries from exploiting emergency triggers", correct: true },
      { text: "To increase staking rewards", correct: false },
      { text: "To simplify Trap logic", correct: false }
    ],
    explanation: "Hidden intents prevent attackers from knowing when emergency mechanisms will trigger."
  },
  {
    question: "Which type of attacks or issues are Drosera Traps specifically designed to detect?",
    answers: [
      { text: "Gas inefficiencies", correct: false },
      { text: "Protocol compromises and unusual state changes", correct: true },
      { text: "UI bugs in decentralized apps", correct: false },
      { text: "Token price volatility", correct: false }
    ],
    explanation: "Traps monitor smart contract state and detect security incidents."
  },
  {
    question: "Which of the following best describes the “Nomad Hack” scenario in the context of Drosera?",
    answers: [
      { text: "A single-block flash loan attack", correct: false },
      { text: "A multi-block compromise where operators could mitigate damage via Trap logic", correct: true },
      { text: "A staking reward manipulation", correct: false },
      { text: "A gas price attack", correct: false }
    ],
    explanation: "Drosera Operators could have detected and mitigated the ongoing withdrawals during the Nomad hack."
  }
];
