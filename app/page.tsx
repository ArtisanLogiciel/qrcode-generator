"use client";
import QRCode from "qrcode.react";
import { useState } from "react";
export default function Home() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("https://www.google.com");
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQrcode(url);
  };
  return (
    <>
      <div className="flex flex-col bg-white items h-screen align-middle w-full justify-center items-center text-black">
        <QRCode value={qrcode} />
        <div className=" text-center">
          <h1>QR Code Generator</h1>
          <p>Enter your URL below to generate a QR code</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handlechange}
            className=" bg-slate-200 border border-black"
            type="text"
          />
          <button
            className="bg-blue-400 text-white p-2 hover:bg-blue-700 transition-all rounded-md border border-black"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
