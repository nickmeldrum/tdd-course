module.exports = {
    createAccount: function createAccount(balance) {
        return {
            balance: balance,
            credit: function credit(amount) {
                this.balance += amount;
            }
        };
    },
    transfer: function transfer(payer, payee, amount) {
        payer.credit(-amount);
        payee.credit(amount);
    }
};

