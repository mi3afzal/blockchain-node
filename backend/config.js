const CONTACT_ADDRESS = '0x62023199Ef63A9BC97510aa778B49AD04DC7A4d1';

const CONTACT_ABI = [{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "contacts",
		"outputs": [{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	},
	{
		"inputs": [],
		"name": "count",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	},
	{
		"inputs": [{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phone",
				"type": "string"
			}
		],
		"name": "createContact",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

module.exports = {
	CONTACT_ABI,
	CONTACT_ADDRESS,
};