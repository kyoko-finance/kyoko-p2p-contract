### Kyoko-P2P


#### Business Introduction

P2P is Kyoko’s blockchain-based peer-to-peer NFT trading operation. NFT holders can deposit NFTs into our smart contracts, and users interested in this NFT can directly lend ERC20 tokens or make a bid through addOffer to enter into an exchange.

##### Mode 1: Direct Lending Mode (lend)

In this mode, exchange parameters such as the NFT lender-customized interest rate is defined, executed, and entered into the interest calculation.

##### Mode 2: Bid Mode (addOffer)

In this mode, users can provide their own offer (including interest rate and other parameters) to enter into an exchange for the NFT. Once the NFT lender accepts an offer, exchange information will be defined and entered into the interest calculation. At any time before the bid is accepted, bidders can cancel their bids and their ERC20 tokens will be returned.

When the NFT lender repays normally, repayment will be calculated and completed according to the interest rate and other exchange parameters, after which the NFT can be retrieved manually, and the counterparty can withdraw the principal plus interest from the smart contract. If the NFT pledger fails to repay after the due date, the lender can initiate a distressed mode and initiate a liquidation countdown. Once the countdown expires, if the NFT lender still has not repaid according to the exchange parameters, the counterparty can manually trigger a liquidation event and obtain the NFT.