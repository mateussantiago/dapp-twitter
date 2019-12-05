pragma experimental ABIEncoderV2;

contract Twitter {
    address owner;
    uint costTweet = 0.1 ether;
    uint costCreateUser = 0.5 ether;
    
    struct User {
        address id;
        string nickname;
        string biography;
        bool active;
    }
    
    struct Tweet {
        User user;
        string tweet;
        uint publication_date;
    }
    
    mapping (address => Tweet[]) tweets;
    mapping (address => User) usersByAddress;
    mapping (string => User) usersByNickname;
    mapping (address => address[]) nodes;
    
    
    function createUser(string nickname, string biography) public payable {
        require(msg.value >= costCreateUser, "Insufficient ether.");
        
        if (isUser() || usersByNickname[nickname].active)
            throw;
            
        usersByAddress[msg.sender] = User(msg.sender, nickname, biography, true);
        usersByNickname[nickname] = User(msg.sender, nickname, biography, true);
    }
    
    function isUser() public view returns (bool) {
        if (usersByAddress[msg.sender].active)
            return true;
        
        return false;
    }
    
    function postTweet(string post) public payable {
        require(msg.value >= costTweet, "Insufficient ether.");
        
        if (!isUser())
            throw;
        
        tweets[msg.sender].push(Tweet(usersByAddress[msg.sender], post, block.timestamp));
    }
    
    
    function getMyTweets() public view returns (Tweet[]) {
        
        return tweets[msg.sender];
    }
    
    function followUser(address userAddress) public payable {
        require(usersByAddress[userAddress].active, "User not found!");
        
        if (msg.sender != userAddress)
            nodes[msg.sender].push(userAddress);
        
    }
    
    function getFollowing() public view returns (User []) {
        address [] following = nodes[msg.sender];
        User [] usersFollowing;
        
        for (uint idxAddress = 0; idxAddress < following.length; idxAddress++) {
            usersFollowing.push(usersByAddress[following[idxAddress]]);
        }
        
        
        return usersFollowing;
    }
    
    function searchUserByAddress(address userAddress) public view returns (User) {
        if (!usersByAddress[userAddress].active) 
            return User(userAddress, "", "", false);
        
        return usersByAddress[userAddress];
        
    }
    
    function searchUserByNickname(string nickname) public view returns (User) {
        if (!usersByNickname[nickname].active)
            return User(msg.sender, "", "", false);
        
        return usersByNickname[nickname];
    }
    
    function feed() public view returns (Tweet []) {
        address [] addresses = nodes[msg.sender];
        Tweet [] tweetsFeed;    
    
        for (uint idxAddress = 0; idxAddress < addresses.length; idxAddress++) {
            for(uint idxTweets = 0; idxTweets < tweets[addresses[idxAddress]].length; idxTweets++){
                tweetsFeed.push(tweets[addresses[idxAddress]][idxTweets]);
            }
        }
        
        return tweetsFeed;
    }
}