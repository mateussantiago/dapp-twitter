var abiTwitter = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "post",
				"type": "string"
			}
		],
		"name": "postTweet",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTweetsByAddress",
		"outputs": [
			{
				"components": [
					{
						"name": "publicAddress",
						"type": "address"
					},
					{
						"name": "tweet",
						"type": "string"
					},
					{
						"name": "publication_date",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

module.exports = abiTwitter;