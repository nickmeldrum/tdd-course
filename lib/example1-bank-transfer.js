module.exports = function bank() {
    return {
        transfer: function transfer(payer, payee, balance) {
            payer.balance -= balance;
        }
    };
};

