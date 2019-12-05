pragma experimental ABIEncoderV2;

contract Twitter {
    address owner;
    uint costTweet = 0.1 ether; // Custo para publicar um twitter
    uint costCreateUser = 0.5 ether; // Custo para criar um usuário
    uint costFollow = 0.3 ether; // Custo para seguir um usuário
    
    // Representa o usuário.
    struct User {
        address id;
        string nickname;
        string biography;
        bool active;
    }
    
    // Representa um tweet.
    struct Tweet {
        User user;
        string tweet;
        uint publication_date;
    }
    
    mapping (address => Tweet[]) tweets; // Dicionário com os tweets por endereço.
    mapping (address => User) usersByAddress; // Dicionário com a conta por endereço
    mapping (string => User) usersByNickname; // Dicionário com a conta por nickname.
    mapping (address => address[]) nodes; /// Dicionário com os endereços que o usuário segue.
    
    // Método para criar um usuário. É necessário informar nickname e biography.
    // Ocorre duas verificações: Se o endereço já está cadastrado como usuário e se
    // o nickname já existe na "base da dados"
    function createUser(string nickname, string biography) public payable {
        require(msg.value >= costCreateUser, "Insufficient ether.");
        
        if (isUser() || usersByNickname[nickname].active)
            throw;
            
        usersByAddress[msg.sender] = User(msg.sender, nickname, biography, true);
        usersByNickname[nickname] = User(msg.sender, nickname, biography, true);
    }
    
    // Método para verificar se o endereço de quem chamou o método está cadastrado.
    function isUser() public view returns (bool) {
        if (usersByAddress[msg.sender].active)
            return true;
        
        return false;
    }

    // Método que possibilita um usuário publicar o seu tweet.
    function postTweet(string post) public payable {
        require(msg.value >= costTweet, "Insufficient ether.");
        
        if (!isUser())
            throw;
        
        tweets[msg.sender].push(Tweet(usersByAddress[msg.sender], post, block.timestamp));
    }
    
    // Retorna os tweets do endereço que chamou o método.
    function getMyTweets() public view returns (Tweet[]) {
        
        return tweets[msg.sender];
    }
    
    // Método que possibilita um usuário seguir outro, passando como parâmetro
    // o endereço do usuário que deseja-se seguir.
    function follow(address userAddress) public payable {
        require(usersByAddress[userAddress].active, "User not found!");
        require(msg.value >= costFollow, "Insufficient ether.");
        
        if (msg.sender != userAddress)
            nodes[msg.sender].push(userAddress);
    }
    
    // Método para recuperar os usuários que o endereço que chamou o método segue.
    function getFollowing() public view returns (User []) {
        address [] following = nodes[msg.sender];
        User [] usersFollowing;
        
        for (uint idxAddress = 0; idxAddress < following.length; idxAddress++) {
            usersFollowing.push(usersByAddress[following[idxAddress]]);
        }
        
        
        return usersFollowing;
    }
    
    // Busca um usuário pelo endereço
    function searchUserByAddress(address userAddress) public view returns (User) {
        if (!usersByAddress[userAddress].active) 
            return User(userAddress, "", "", false);
        
        return usersByAddress[userAddress];
        
    }
    
    // Busca um usuário pelo nickname
    function searchUserByNickname(string nickname) public view returns (User) {
        if (!usersByNickname[nickname].active)
            return User(msg.sender, "", "", false);
        
        return usersByNickname[nickname];
    }
    
    // Retorna o feed do usuário. Percorre todos os endereços que ele segue e recupera
    // os tweets de cada um. 
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