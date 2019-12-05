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
				"components": [
					{
						"components": [
							{
								"name": "id",
								"type": "address"
							},
							{
								"name": "nickname",
								"type": "string"
							},
							{
								"name": "biography",
								"type": "string"
							},
							{
								"name": "active",
								"type": "bool"
							}
						],
						"name": "user",
						"type": "tuple"
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
		"name": "getFollowing",
		"outputs": [
			{
				"components": [
					{
						"name": "id",
						"type": "address"
					},
					{
						"name": "nickname",
						"type": "string"
					},
					{
						"name": "biography",
						"type": "string"
					},
					{
						"name": "active",
						"type": "bool"
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
		"name": "getMyTweets",
		"outputs": [
			{
				"components": [
					{
						"components": [
							{
								"name": "id",
								"type": "address"
							},
							{
								"name": "nickname",
								"type": "string"
							},
							{
								"name": "biography",
								"type": "string"
							},
							{
								"name": "active",
								"type": "bool"
							}
						],
						"name": "user",
						"type": "tuple"
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
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "searchUserByAddress",
		"outputs": [
			{
				"components": [
					{
						"name": "id",
						"type": "address"
					},
					{
						"name": "nickname",
						"type": "string"
					},
					{
						"name": "biography",
						"type": "string"
					},
					{
						"name": "active",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "nickname",
				"type": "string"
			}
		],
		"name": "searchUserByNickname",
		"outputs": [
			{
				"components": [
					{
						"name": "id",
						"type": "address"
					},
					{
						"name": "nickname",
						"type": "string"
					},
					{
						"name": "biography",
						"type": "string"
					},
					{
						"name": "active",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

exports.abiTwitter = abiTwitter;