module.exports = {
    transfer: function transfer(payer, payee, balance) {
        payer.balance -= balance;
        payee.balance += balance;
    }
};

