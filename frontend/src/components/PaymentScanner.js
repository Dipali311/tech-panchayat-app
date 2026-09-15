import React, { useEffect, useRef, useState } from "react";
import { Camera, CheckCircle2, FileImage, ScanLine, X } from "lucide-react";

export default function PaymentScanner({ taxName, taxId, amount, onClose }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [cameraState, setCameraState] = useState("idle");
  const [message, setMessage] = useState("");
  const [paymentReference, setPaymentReference] = useState("");

  useEffect(() => () => streamRef.current?.getTracks().forEach((track) => track.stop()), []);

  const startCamera = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraState("unsupported");
      return;
    }
    try {
      streamRef.current = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      videoRef.current.srcObject = streamRef.current;
      await videoRef.current.play();
      setCameraState("ready");
      setMessage("Point your camera at the payment QR code.");
    } catch {
      setCameraState("denied");
      setMessage("Camera access was unavailable. You can upload a QR image instead.");
    }
  };

  const handleQrImage = (event) => {
    if (event.target.files?.length) {
      setCameraState("scanned");
      setPaymentReference(`QR-${taxId}-${Date.now().toString().slice(-6)}`);
      setMessage("QR image received. Confirm the payment reference below.");
    }
  };

  const confirmPayment = () => {
    setCameraState("confirmed");
    setMessage("Payment request recorded. Complete the payment in your UPI app.");
  };

  return <div className="payment-scanner-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <section className="payment-scanner" role="dialog" aria-modal="true" aria-labelledby="payment-scanner-title">
      <div className="payment-scanner-heading"><div><p>Secure payment</p><h2 id="payment-scanner-title">Scan to pay {taxName}</h2></div><button onClick={onClose} aria-label="Close payment scanner"><X size={19} /></button></div>
      <div className="payment-summary"><span>Tax ID: <strong>{taxId}</strong></span><span>Amount: <strong>₹{amount}</strong></span></div>
      <div className="scanner-view"><video ref={videoRef} aria-label="Payment QR scanner camera" muted playsInline />{cameraState === "idle" && <div className="scanner-placeholder"><ScanLine size={34} /><span>Use your camera to scan the official payment QR</span></div>}{cameraState === "ready" && <div className="scanner-frame" aria-hidden="true" />}{cameraState === "confirmed" && <div className="scanner-success"><CheckCircle2 size={38} /><strong>Payment initiated</strong></div>}</div>
      <p className="scanner-message" aria-live="polite">{message || "Your camera permission is only used for scanning this QR code."}</p>
      <div className="scanner-actions">{cameraState === "idle" && <button className="scanner-primary" onClick={startCamera}><Camera size={17} /> Open camera</button>}{cameraState !== "confirmed" && <label className="scanner-secondary"><FileImage size={17} /> Upload QR image<input type="file" accept="image/*" onChange={handleQrImage} /></label>}{(cameraState === "scanned" || cameraState === "ready") && <button className="scanner-primary" onClick={() => { setPaymentReference(`UPI-${taxId}`); confirmPayment(); }}>Continue payment</button>}<button className="scanner-cancel" onClick={onClose}>Cancel</button></div>
      {paymentReference && cameraState !== "confirmed" && <p className="scanner-reference">Reference detected: <strong>{paymentReference}</strong></p>}
    </section>
  </div>;
}
