import { useState } from "react"

const TravelBill = () => {

    let [km, setKm] = useState('');

    const [bill, setBill] = useState('');

    const [loading, setLoading] = useState(false);

    const handleKilometerInput = (e) => {
        const v = Number(e.target.value);
        setKm(v);
    }

    const calculateBill = () => {

        if (km == '') {
            alert("Please Enter valid distance");
            return;
        }

        let val = 0;

        if(km <= 10){
            val = (km*11).toFixed(2);
            setBill(val);
        }
        else if(km <= 100){
            let a = km - 10;
            val = (10*11 + a*10).toFixed(2);
            setBill(val);
        }
        else{
            let c = km - 100;
            val = (10*11 + 90*10 + c*8).toFixed(2);
            setBill(val);
        }

        setLoading(true);
        setKm('');

    }

    return (
        <div className="flex flex-col justify-center items-center m-5 text-white">

            <h1 className="font-bold text-4xl text-white">Travel Bill Calculator</h1>

            <div className="m-5 h-[25em] w-[50em] border flex justify-around items-center rounded-2xl">

                <div className="h-[20em] w-[20em] border text-center rounded-2xl shadow-xl p-5 bg-linear-to-r from-[#3F2B96] to-[#A8C0FF] text-black">
                    <h3 className="font-bold text-2xl">Rates on Kilometers</h3>
                    <div className="mt-4 flex flex-col gap-2 font-medium text-start">
                        <ol className="list-disc pl-4 text-lg">
                            <li>For the first 10 km, the rate is Rs. 11 per km</li>
                            <li>For the next 90 km, the rate is Rs. 10 per km
                            </li>
                            <li>After 100 km, the rate is Rs. 9 per km</li>
                        </ol>
                    </div>
                </div>
                <div className="h-[20em] w-[20em] border rounded-2xl flex flex-col p-5 shadow-xl items-center bg-linear-to-r from-[#3F2B96] to-[#A8C0FF] text-black">
                    <h3 className="font-bold text-2xl mb-7">Calculate Travel Bill</h3>

                    <input type="number" value={km} onChange={handleKilometerInput} onClick={() => setLoading(false)} placeholder="Enter kilometers" className="border bg-white p-2 text-xl rounded-2xl border-b-blue-600" />
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

export default TravelBill
