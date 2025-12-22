import { useState } from "react"

const ElectricityBill = () => {

    let [units, setUnits] = useState('');

    const [bill, setBill] = useState('');

    const [loading, setLoading] = useState(false);

    const handleUnitsInput = (e) => {
        const v = Number(e.target.value);
        setUnits(v);
    }

    const calculateBill = () => {

        if (units == '') {
            alert("Please Enter valid unit/s");
            return;
        }

        let val = 0;

        if(units <= 50){
            val = (units*0.50 + (units*0.50)*0.2).toFixed(2);
            setBill(val);
        }
        else if(units <= 200){
            let a = units - 50;
            val = (50*0.50 + a*0.75);
            val = (val + val*0.2).toFixed(2);
            setBill(val);
        }
        else if(units <= 450){
            let b = units - 200;
            val = (50*0.50 + 150*0.75 + b*1.20);
            val = (val + val*0.2).toFixed(2);
            setBill(val);
        }
        else{
            let c = units - 450;
            val = (50*0.50 + 150*0.75 + 250*1.20 + c*1.50);
            val = (val + val*0.2).toFixed(2);
            setBill(val);
        }

        setLoading(true);
        setUnits('');

    }

    return (
        <div className="flex flex-col justify-center items-center m-5 text-white">

            <h1 className="font-bold text-4xl text-white">Electricity Bill Calculator</h1>

            <div className="m-5 h-[25em] w-[50em] border flex justify-around items-center rounded-2xl">

                <div className="h-[20em] w-[20em] border text-center rounded-2xl shadow-xl p-5 bg-linear-to-r from-[#3F2B96] to-[#A8C0FF] text-black">
                    <h3 className="font-bold text-2xl">Electricity Rates on Units</h3>
                    <div className="mt-4 flex flex-col gap-2 font-medium text-start">
                        <ol className="list-disc pl-4 text-lg">
                            <li>For first 50 units ₹0.50/unit</li>
                            <li>For next 150 units Rs. 0.75/unit
                            </li>
                            <li>For next 250 units Rs. 1.20/unit</li>
                            <li>For unit above 250 Rs. 1.50/unit</li>
                            <li>An addional surcharge of 20% is added to the bill</li>
                        </ol>
                    </div>
                </div>
                <div className="h-[20em] w-[20em] border rounded-2xl flex flex-col p-5 shadow-xl items-center bg-linear-to-r from-[#3F2B96] to-[#A8C0FF] text-black">
                    <h3 className="font-bold text-2xl mb-7">Calculate Electricity Bill</h3>

                    <input type="number" value={units} onChange={handleUnitsInput} onClick={() => setLoading(false)} placeholder="Enter units consumed" className="border bg-white p-2 text-xl rounded-2xl border-b-blue-600" />
                    <button onClick={calculateBill} className="py-2 px-4 rounded-2xl mt-5 bg-blue-500 font-bold hover:scale-[1.1] transition-all hover:shadow-2xl hover:border hover:border-black">Calculate</button>

                    {loading &&
                        <div className="mt-5 font-bold text-center">
                            <p className="mb-4">Your Calculatd Bill</p>
                            <span>₹{bill}</span>
                        </div>
                    }

                </div>

            </div>

        </div>
    )
}

export default ElectricityBill
