pragma experimental ABIEncoderV2;

contract TwitterFeed {
    address owner;
    uint costPost = 0.3 ether;
    
    struct Tweet {
        address publicAddress;
        string tweet;
        uint publication_date;
    }
    
    mapping (address => Tweet[]) feed;
    
    function postTweet(string post) public payable {
        require(msg.value >= 0.3 ether, "Insufficient ether.");
    
        feed[msg.sender].push(Tweet(msg.sender, post, block.timestamp));
    }
    
    function getIdsOfTweetByAddress() public view returns (Tweet[]) {
        
        return feed[msg.sender];
        
    }
    
}