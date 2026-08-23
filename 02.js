function createBankAccount() {
  let balance = 0;

  return {
    deposit(amount){
      balance += amount;
    },
    withdraw(amount) {

      if (balance >= amount) {
        balance -= amount;
        return true;
      } else {
        console.log("balance not sufficient.");
        return false;
      }

    },
    checkBalance(){
      return balance;
    }
  }
}

const account = createBankAccount();

account.deposit(1000);
account.withdraw(500);
console.log(account.checkBalance());