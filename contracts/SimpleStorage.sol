// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Ownable.sol";
import "./StorageLibrary.sol";
import "./Upgradeable.sol";

contract SimpleStorage is Ownable, Upgradeable {
    using StorageLibrary for uint256;

    uint256 private storedData;

    event DataChanged(uint256 newValue);

    function set(uint256 x) public onlyOwner {
        storedData = x;
        emit DataChanged(x);
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
