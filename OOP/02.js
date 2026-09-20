function bankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance = this.balance + amount;
        
        return this.balance;
    };

    this.withdraw = function(amount) {
        this.balance = this.balance - amount;

        return this.balance;
    };

    this.getBalance = function() {
        return this.balance;
    }
}

const accounts1 = new bankAccount("Eljay", 10000);
const accounts2 = new bankAccount("Gon", 5000);

console.log(accounts1.deposit(3000));   
console.log(accounts1.withdraw(1000));  
console.log(accounts1.getBalance());    

console.log(accounts2.deposit(1000));   
console.log(accounts2.getBalance());    