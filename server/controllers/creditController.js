class CreditController{
    async countCredit(req,res){
        const data = req.body;
        //months, procent, sum->month, sum, ostatok

        const result = [];
        const monthProcent = data.procent/12;
        const sumPerMonth = data.sum/data.months;
        for(let i=1;i<=data.months;i++){
            result.push({month:i, mainSum: +sumPerMonth.toFixed(3), procentPerMonth: +(data.sum/(monthProcent*100)).toFixed(3), sumPerMonth: +(+sumPerMonth.toFixed(3)+ +(data.sum/(monthProcent*100))).toFixed(3)});
            data.sum-=sumPerMonth;
        }

        res.status(200).json(result);
    }

}
module.exports = new CreditController();