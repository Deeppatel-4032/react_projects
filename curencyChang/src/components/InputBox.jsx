import  React, {useId} from "react";

function InputBox({
  label,
  amount,
  onAmountChang,
  onCurrencyChang,
  currecyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {
  const amountInputId = useId();
  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
        <div className="w-1/2">
          <label
            htmlFor={amountInputId}
            className="text-black mb-2 inline-block"
          >
            {label}
          </label>
          <input
            id={amountInputId}
            className="outline-none w-full text-black bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChang && onAmountChang(Number(e.target.value))
            }
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 text-black bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            disabled={currencyDisable}
            onChange={(e) => onCurrencyChang && onCurrencyChang((e.target.value))}
          >
            {currecyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
