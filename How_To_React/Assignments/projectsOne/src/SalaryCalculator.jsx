import { useState } from "react"

const SalaryCalculator = () => {

    let [salary, setSalary] = useState('');

    const [gross, setGross] = useState('');

    const [loading, setLoading] = useState(false);

    const handleSalaryInput = (e) => {
        const v = Number(e.target.value);
        setSalary(v);
    }

    const calculateSalary = () => {

        if (salary == '') {
            alert("Please Enter a Valid Salary");
            return;
        }

        let value = 0;

        if (salary <= 10000) {
            value = salary + (salary * 0.2) + (salary * 0.8);
            setGross(value);
        }
        else if (salary > 10000 && salary <= 20000) {
            value = salary + salary * 0.25 + salary * 0.90;
            setGross(value);

        } else {
            value = salary + salary * 0.3 + salary * 0.95;
            setGross(value);
        }

        setLoading(true);
        setSalary('');

    }

    return (
        <div className="flex flex-col justify-center items-center m-5 text-white">

            <h1 className="font-bold text-4xl text-white">Salary Calculator</h1>

            <div className="m-5 h-[25em] w-[50em] border flex justify-around items-center rounded-2xl">

                <div className="h-[20em] w-[20em] border text-center rounded-2xl shadow-xl p-5 bg-linear-to-r from-[#3F2B96] to-[#A8C0FF] text-black">
                    <h3 className="font-bold text-2xl">Salary Structure</h3>
                    <div className="mt-4 flex flex-col gap-2 font-medium text-start">
                        <ul>
                            <li>Basic Salary : Upto ₹10,000</li>
                            <li>HRA : 20%</li>
                            <li>DA : 80%</li>
                        </ul>
                        <ul>
                            <li>Basic Salary : Upto ₹20,000</li>
                            <li>HRA : 25%</li>
                            <li>DA : 90%</li>
                        </ul>
                        <ul>
                            <li>Basic Salary : More than ₹20,000</li>
                            <li>HRA : 30%</li>
                            <li>DA : 95%</li>
                        </ul>
                    </div>
                </div>
                <div className="h-[20em] w-[20em] border rounded-2xl flex flex-col p-5 shadow-xl items-center bg-linear-to-r from-[#3F2B96] to-[#A8C0FF] text-black">
                    <h3 className="font-bold text-2xl mb-7">Calculate Salary</h3>

                    <input type="number" value={salary} onChange={handleSalaryInput} onClick={() => setLoading(false)} placeholder="Enter your base pay" className="border bg-white p-2 text-xl rounded-2xl border-b-blue-600" />
                    <button onClick={calculateSalary} className="py-2 px-4 rounded-2xl mt-5 bg-blue-500 font-bold hover:scale-[1.1] transition-all hover:shadow-2xl hover:border hover:border-black">Calculate</button>

                    {loading &&
                        <div className="mt-5 font-bold text-center">
                            <p className="mb-4">Your Calculatd Salary</p>
                            <span>₹{gross}</span>
                        </div>
                    }

                </div>

            </div>

        </div>
    )
}

export default SalaryCalculator
