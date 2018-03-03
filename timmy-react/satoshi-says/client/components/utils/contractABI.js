var contractABI = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_whatTimmyShouldSay",
          "type": "string"
        }
      ],
      "name": "changeWhatTimmySays",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "whatTimmyShouldSay",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "constructor"
    }
  ]

  export default contractABI
