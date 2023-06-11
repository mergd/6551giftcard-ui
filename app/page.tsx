"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
declare global {
  interface Window {
    managegifts: any;
    opengift: any;
    creategift: any;
  }
}

export default function Home() {
  const hero = (
    <div
      className="hero bg-base-200 max-h-5xl rounded-lg"
      style={{
        position: "relative",
        backgroundImage: "url('/images/gifthero.jpg')",
        height: "300px",
      }}
    >
      <div className="hero-content text-start bg-opacity-50 bg-gray-800 p-2 rounded-md">
        <div className="flex bold flex-col">
          <h1 className="font-serif text-3xl">gifted</h1>
          <p className="italic ">adjective</p>
          <h1 className="text-xl font text-start gray-600 ">
            Gifts for the moments that really matter
          </h1>
        </div>
      </div>
    </div>
  );

  const createGift = (
    <div className="card card-compact grid-col bg-base-100 shadow-xl">
      <figure>
        <img src="/images/creategift.png" alt="Gift card" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-serif">Create a Gift Card</h2>
        <p>
          Get a crypto gift card for your loved ones, or to get them started
          with Web3!
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-default">
            <Link href="/create">Create Gift</Link>
          </button>
        </div>
      </div>
    </div>
  );

  const openGift = (
    <div className="card card-compact grid-col bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/opengifts.png"
          alt="Open Gift"
          style={{
            objectFit: "cover",
            height: "225px",
            width: "300px",
            objectPosition: "center",
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-serif">Received a code?</h2>
        <p>Redeem your code here to get started with your web3 journey!</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-default"
            onClick={() => window.opengift.showModal()}
          >
            Redeem
          </button>
        </div>
      </div>
    </div>
  );

  const manageGifts = (
    <div className="card card-compact grid-col bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/managegifts.png"
          alt="Manage Gift"
          style={{
            objectFit: "cover",
            height: "225px",
            width: "300px",
            objectPosition: "center",
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-serif">Manage your gifts</h2>
        <p>Track your gift cards.</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-default "
            onClick={() => window.managegifts.showModal()}
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 grid-cols-1">
          <div className="col-span-3 max-h-5xl">{hero}</div>
          {createGift}
          {openGift}
          {manageGifts}
        </div>

        <dialog id="managegifts" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Gifts you&apos;ve made</h3>
            <div className="overflow-x-auto"></div>

            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>

        <dialog id="opengift" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-modal-box w-11/12 max-w-5xl">
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
      </main>
    </div>
  );
}
