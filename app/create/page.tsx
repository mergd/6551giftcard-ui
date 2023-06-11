"use client";
import React from "react";
import { useDebounce } from "use-debounce";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { parseEther } from "viem";
import Navbar from "../components/navbar";

function CreatePage() {
  const [to, setTo] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [debouncedAmount] = useDebounce(amount, 500);
  const [currentStep, setCurrentStep] = React.useState(0); // add state for current step

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const stepBar = (
    <ul className="steps steps-vertical lg:steps-horizontal w-full mb-2">
      <li
        className={`step ${currentStep === 0 ? "step-primary" : ""}`}
        onClick={() => handleStepClick(0)}
      >
        Create Gift
      </li>
      <li
        className={`step ${currentStep === 1 ? "step-primary" : ""}`}
        onClick={() => handleStepClick(0)}
      >
        Load Gifts
      </li>
      <li
        className={`step ${currentStep === 2 ? "step-primary" : ""}`}
        onClick={() => handleStepClick(0)}
      >
        Customize
      </li>
      <li
        className={`step ${currentStep === 3 ? "step-primary" : ""}`}
        onClick={() => handleStepClick(0)}
      >
        Share
      </li>
    </ul>
  );

  const { config } = usePrepareContractWrite({
    address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
    abi: [
      {
        name: "mint",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [],
        outputs: [],
      },
    ],
    functionName: "mint",
    value: parseEther("0.0"),
  });
  const { data, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  return (
    <form className=" p-5">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {stepBar}
        <h3 className="font-bold text-lg">Create a new gift</h3>
        <p className="py-4">Enter the details below to create a new gift:</p>
        <div className="form-control">
          <label className="label">
            Recipient Address
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Enter recipient address"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            Amount
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            Message
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <div className="modal-action">
          <button
            className="btn btn-primary"
            disabled={!write}
            onClick={() => write?.()}
          >
            Create Gift
          </button>
          {isSuccess && (
            <div>
              Successfully minted your NFT!
              <div>
                <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
              </div>
            </div>
          )}

          {isSuccess && currentStep === 0 && (
            <button
              className="btn btn-primary"
              onClick={() => handleStepClick(currentStep + 1)}
            >
              {" "}
              Load with Gifts
            </button>
          )}
          <button className="btn">Cancel</button>
        </div>
      </main>
    </form>
  );
}

export default CreatePage;
