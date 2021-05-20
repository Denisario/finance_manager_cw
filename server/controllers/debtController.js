class DebtController{
    async countDebt(req,res){
        const data = req.body;
        console.log(data);
        const result = [];
        const monthProcent = data.procent/12;
        for(let i=1;i<=data.months;i++){
            const totalSum = data.sum*(1+monthProcent/100);
            result.push({month: i, sum: +totalSum.toFixed(3), up: +(totalSum-data.sum).toFixed(3)});
            data.sum=totalSum;
        }

        return res.status(200).json(result);
    }
}

module.exports = new DebtController();