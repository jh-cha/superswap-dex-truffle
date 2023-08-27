const AnemoToken = artifacts.require("AnemoToken");
const JhchaToken = artifacts.require("JhchaToken");

module.exports = function (deployer) {
    deployer.deploy(AnemoToken);
    deployer.deploy(JhchaToken);
}