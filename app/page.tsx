"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
declare global {
  interface Window {
    managegifts: any;
    opengift: any;
    creategift: any;
  }
}

export default function Home() {
  return (
    <div>
      <div className=" ">
        <Navbar />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-3 gap-4">
          <div className="card card-compact grid-col bg-base-100 shadow-xl">
            <figure>
              <img src="/images/creategift.png" alt="Gift card" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Crypto Gift Cards</h2>
              <p>
                Get a crypto gift card for your loved ones, or to get them
                started with Web3!
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => window.creategift.showModal()}
                >
                  Create Gift
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact grid-col bg-base-100 shadow-xl">
            <figure>
              <img src="/images/opengifts.png" alt="Open Gift" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Received a code?</h2>
              <p>
                Redeem your code here to get started with your web3 journey!
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => window.opengift.showModal()}
                >
                  Redeem
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact grid-col bg-base-100 shadow-xl">
            <figure>
              <img src="/images/managegifts.png" alt="Manage Gift" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Manage your gifts</h2>
              <p>Track your gift cards.</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => window.managegifts.showModal()}
                >
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>

        <dialog id="managegifts" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Gifts you&apos;ve made</h3>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Gift Address</th>
                    <th>Opened</th>
                    <th>Create Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>USDC for Jadid&apos;s birthday</td>
                    <td>0xsa98...d799a</td>
                    <td>False</td>
                    <button className="btn">Sig</button>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Web3 starter for Wilfred</td>
                    <td>0xsa98...d799a</td>
                    <td>True</td>
                    <button className="btn">Sig</button>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Jameson&apos;s b-day gift</td>
                    <td>0xsa98...d799a</td>
                    <td>True</td>
                    <button className="btn">Sig</button>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>

        <dialog id="opengift" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              <input
                type="text"
                placeholder="Enter your code"
                className="input input-bordered w-full max-w-xs"
              />
            </p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Redeem</button>
            </div>
          </form>
        </dialog>

        <dialog id="creategift" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box w-2/3 h-1/2">
            <h3 className="font-bold text-lg">Yo!</h3>
            <p className="py-4">Create gift</p>
            <div className="modal-action flex-col ">
              {/* if there is a button in form, it will close the modal */}
              <p>
                {" "}
                Create a gift card first, and then you can fund it
                <br />
                <br />
              </p>
              <div className="flex  gap-2">
                <button className="btn">Create</button>

                <button className="btn">Fund</button>
              </div>

              <input
                type="text"
                placeholder="Type who this might be for"
                className="input w-full max-w-xs"
              />
              <br />
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </main>
    </div>
  );
}
