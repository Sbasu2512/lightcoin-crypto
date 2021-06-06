/*
Here's a list of features that our code needs to support:

Allow multiple accounts to be created
Each account can have many transactions
Allow withdrawals and deposits into accounts
Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
Allow us to retrieve the current balance of the account at any time
Don't allow withdrawals that exceed the remaining balance of the account
*/
//let balance = 500.00;

class Transaction {
  constructor(amount,account){
    this.account = account;
    this.amount = amount;
  }

  commit() {
    this.account.balance += this.value;
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class deposits extends Transaction{

  get value(){
    return this.amount ;
  }
}

class Account {

  constructor(username){
    this.username = username;
    this.balance = 0 ;
    this.transactions = [];
  }

  get balance () {
    return this.balance;
  }

  addTransactions(transaction){
    this.transactions.push(this.transaction);
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new deposits(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);

//console.log(`This account belongs to ${t1.username} and the current balance is ${t1.balance}`);


// t2 = new Account("Shivanee");

// t2.commit();
// console.log(`This account belongs to ${t2.username} and the current balance is ${t2.balance}`);
