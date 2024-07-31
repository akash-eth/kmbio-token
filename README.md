## KMBIO Token

***

#### Clone repository
```bash
git clone https://github.com/akash-eth/kmbio-token.git
```
```bash
git checkout main
```
***
#### Installation
```bash
cd kmbio-token
npm install
```
***
#### Compile smart contracts
```bash
npx hardhat compile
```
***
#### Test smart contracts
```bash
npx hardhat test
```
***
#### Deployment
Create a .env file in the root directory and add the following variables
>`PRIVATE_KEY_ADMIN = ""`
>``

Supported networks for deployment
-   localhost
-   sepolia
-   mainnet

##### Deploying KMBIO Token Smart Contract
```bash
npx hardhat run --network mainnet scripts/deploy-kmbio.js
```
***
#### Smart contract verfication
Add the following to your .env file
> `ETHERSCAN_API_KEY = ""`

```bash
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
```