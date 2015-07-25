module.exports = {
    createAccount: function createAccount(balance) {
        return {
            balance: balance,
            credit: function credit(amount) {
                this.balance += amount;
            }
        };
    },
    transfer: function transfer(payer, payer, amount) {
        payer.credit(-amount);
        payer.credit(amount);
    }
};

