# **Blockchain-Based Energy Credit System** ⚡

## **Overview**
This project implements a **decentralized energy trading system** that allows **retail consumers and small-scale renewable energy producers** to trade electricity directly using **blockchain-based energy credits**. By tokenizing energy as **ERC-20 tokens**, this system eliminates intermediaries, lowers transaction costs, and promotes the adoption of decentralized renewable energy.

## **Motive: Empowering Retail Consumers**
### **Problems with Traditional Energy Markets**
- **High transaction costs** due to middlemen.
- **Lack of transparency** in energy pricing.
- **Limited incentives** for small-scale renewable producers (e.g., homeowners with solar panels).

### **How This System Helps**
🔹 **Energy Credits (ECs):** Each unit of energy (e.g., 1 kWh) is tokenized as a **blockchain asset**.
🔹 **P2P Trading:** Consumers **buy directly** from small producers **without intermediaries**.
🔹 **Smart Contracts:** Transactions are **automated and secure**.
🔹 **Lower Costs & Green Energy:** Producers **earn more**, and consumers **pay less**.

## **Key Features**
✅ **ERC-20 Token for Energy Credits**
✅ **Smart Contracts for Secure Trading**
✅ **Decentralized P2P Marketplace**
✅ **Scalability with Layer-2 Solutions (Future Scope)**

## **Technology Stack**
- **Blockchain:** Ethereum (Solidity, Ganache, Truffle)
- **Smart Contracts:** ERC-20 for energy credits, automated P2P transactions
- **Backend:** Node.js (Web3.js for blockchain interactions)
- **Frontend:** React.js (future development)

## **Getting Started**
### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/blockchain-energy-trading.git
cd blockchain-energy-trading
```

### **2. Install Dependencies**
```sh
npm install -g truffle ganache-cli
```

### **3. Start a Local Blockchain**
```sh
ganache-cli --accounts 10 --gasLimit 6721975 --port 7545
```

### **4. Deploy Smart Contracts**
```sh
truffle migrate --network development
```

### **5. Run a Marketplace Simulation**
```sh
truffle console
```
```javascript
let token = await EnergyCredit.deployed();
let market = await EnergyMarketplace.deployed();
await token.transfer(accounts[1], 100); // Assign 100 EC to User 1
await market.buyCredits(10, { from: accounts[2], value: web3.utils.toWei("0.1", "ether") });
```

## **Use Case: A Small-Scale Solar Community**
Imagine a neighborhood where **10 households** have **solar panels**:
- **House A (Producer)** sells excess energy to **House B (Consumer)**.
- **Smart Contracts** automate payments and ensure security.
- **House B pays less than utility rates**, while **House A earns more**.

## **Next Steps**
🔹 **Deploy on Ethereum testnet (Goerli/Sepolia)**  
🔹 **Develop a Web3 frontend for user-friendly interactions**  
🔹 **Implement Layer-2 scaling solutions for cost efficiency**  
🔹 **Integrate AI-driven demand forecasting & IoT metering**  

## **Contributing**
Contributions are welcome! Feel free to open **issues, PRs, or discussions** to improve the project. 🚀

## **License**
This project is licensed under the **MIT License**.

---
