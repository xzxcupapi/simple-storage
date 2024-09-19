// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract Upgradeable {
    uint256 private _version;

    function getVersion() public view returns (uint256) {
        return _version;
    }

    function setVersion(uint256 version) public {
        _version = version;
    }
}
