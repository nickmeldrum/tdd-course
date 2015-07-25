module.exports = {
    createAccount: function createAccount(balance) {
        return {
            balance: balance,
            credit: function credit(amount) {
                this.balance += amount;
            }
        };
    },
    transfer: function transfer(payerBalance, payeeBalance, amount) {
        return {
            payerBalance: payerBalance - amount,
            payeeBalance: payeeBalance + amount
        };
    }
};

