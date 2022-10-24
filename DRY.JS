class Worker {
    constructor(hoursWorked, rate) {
        this.hoursWorked = hoursWorked
        this.rate = rate
        this.TAX = 20
    }
    basicsalary() {
        return this.hoursWorked * this.rate;
    }
overviewSalary() {
    return this.hoursWorked * this.rate + this.TAX;
    }
}

const heru = new Worker(40, 10)
console.log(heru.basicsalary())
console.log(heru.overviewSalary())