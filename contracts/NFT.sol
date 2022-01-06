pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;
    Counters.Counter private _tokenIds;
    mapping (uint256 => string) private _tokenURIs;
    string private _baseURIextended;

    constructor() ERC721("MyNFT", "MNFT") {}

    function _setTokenURI(uint256 tokenId, string memory _tokenURI)
        internal
        virtual
    {       
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory _tokenURI = _tokenURIs[tokenId];
        return _tokenURI;
    }

    function mint(address recipient, string memory uri)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, uri);
        return newItemId;
    }

    function transfer(address _seller, address _buyer, uint256 _tokenId) external payable returns(bool){
        // transfer assets from seller to buyer
        // seller pays the tx fees        
        address ownerAddress = ownerOf(_tokenId);        
        require(_seller == ownerAddress,"Ownership mismatch");
        approve(_buyer, _tokenId);      
        setApprovalForAll(msg.sender, true);
        safeTransferFrom(ownerAddress, _buyer, _tokenId);
        return true;
    }

    function burn(uint256 _tokenId) public returns (bool) {
        _burn(_tokenId);
        return true;
    }
}