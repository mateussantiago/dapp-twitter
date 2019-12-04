var abiTwitter = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "nickname",
				"type": "string"
			},
			{
				"name": "biography",
				"type": "string"
			}
		],
		"name": "createUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "followUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
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
		"name": "feed",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
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
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isUser",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

exports.abiTwitter = abiTwitter;