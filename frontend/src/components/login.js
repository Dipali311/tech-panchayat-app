import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, RefreshCw } from "lucide-react";
import "./login.css"; // optional for bg/fonts

export default function Login() {
  const [step, setStep] = useState(1); // step control
  const [state, setState] = useState("");
  const [taluka, setTaluka] = useState("");
  const [gramPanchayat, setGramPanchayat] = useState("");
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [error, setError] = useState("");
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");
  const [isRegister, setIsRegister] = useState(false); // toggle login/register
  const navigate = useNavigate();

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8);
  }

  // Data
  const states = ["Maharashtra", "Karnataka", "Gujarat", "Madhya Pradesh"];
  const talukas = ["Haveli", "Mulshi", "Baramati", "Shirur"];
  const gramPanchayats = ["Nirgudi", "Wagholi", "Manjari", "Kesnand"];

  const translations = {
    en: {
      tagline: "Connected villages. Better services.",
      eyebrow: "Digital public service portal",
      introTitle: "One simple place for every village need.",
      introDescription: "Access local records, schemes, notices, taxes, and community updates with clarity and confidence.",
      highlights: ["Local records", "Public schemes", "Transparent updates"],
      selectLocation: "Select Location",
      state: "-- Select State --",
      taluka: "-- Select Taluka --",
      gramPanchayat: "-- Select Gram Panchayat --",
      next: "Next",
      registration: "Resident Registration",
      chooseUserId: "Choose User ID",
      enterPassword: "Enter Password",
      confirmPassword: "Confirm Password",
      register: "Register",
      backToLogin: "Back to Login",
      login: "Login",
      selectRole: "-- Select Role --",
      userId: "User ID",
      password: "Password",
      captcha: "Enter Captcha", refreshCaptcha: "Refresh Captcha",
      newResident: "New Resident? Register",
      back: "Back",
      locationError: "Please select State, Taluka, and Gram Panchayat",
      roleError: "Please select a Role",
      captchaError: "Captcha does not match",
      invalidCredentials: "Invalid credentials",
      fillFields: "Please fill all fields",
      passwordsMismatch: "Passwords do not match",
      registrationSuccess: "Registration successful! Please login.",
    },
    hi: {
      tagline: "जुड़े हुए गांव। बेहतर सेवाएं।",
      eyebrow: "डिजिटल सार्वजनिक सेवा पोर्टल",
      introTitle: "गांव की हर जरूरत के लिए एक सरल स्थान।",
      introDescription: "स्थानीय रिकॉर्ड, योजनाओं, सूचनाओं, करों और सामुदायिक अपडेट को आसानी से देखें।",
      highlights: ["स्थानीय रिकॉर्ड", "सरकारी योजनाएं", "पारदर्शी अपडेट"],
      selectLocation: "स्थान चुनें",
      state: "-- राज्य चुनें --",
      taluka: "-- तालुका चुनें --",
      gramPanchayat: "-- ग्राम पंचायत चुनें --",
      next: "आगे",
      registration: "निवासी पंजीकरण",
      chooseUserId: "यूजर आईडी चुनें",
      enterPassword: "पासवर्ड दर्ज करें",
      confirmPassword: "पासवर्ड की पुष्टि करें",
      register: "पंजीकरण करें",
      backToLogin: "लॉगिन पर वापस जाएं",
      login: "लॉगिन",
      selectRole: "-- भूमिका चुनें --",
      userId: "यूजर आईडी",
      password: "पासवर्ड",
      captcha: "कैप्चा दर्ज करें", refreshCaptcha: "कैप्चा बदलें",
      newResident: "नए निवासी? पंजीकरण करें",
      back: "वापस",
      locationError: "कृपया राज्य, तालुका और ग्राम पंचायत चुनें",
      roleError: "कृपया भूमिका चुनें",
      captchaError: "कैप्चा मेल नहीं खाता",
      invalidCredentials: "गलत लॉगिन जानकारी",
      fillFields: "कृपया सभी फ़ील्ड भरें",
      passwordsMismatch: "पासवर्ड मेल नहीं खाते",
      registrationSuccess: "पंजीकरण सफल हुआ! कृपया लॉगिन करें।",
    },
    mr: {
      tagline: "जोडलेली गावे. उत्तम सेवा.",
      eyebrow: "डिजिटल सार्वजनिक सेवा पोर्टल",
      introTitle: "गावाच्या प्रत्येक गरजेसाठी एक सोपे ठिकाण.",
      introDescription: "स्थानिक नोंदी, योजना, सूचना, कर आणि समुदायातील अपडेट सहजपणे पहा.",
      highlights: ["स्थानिक नोंदी", "सरकारी योजना", "पारदर्शक अपडेट"],
      selectLocation: "स्थान निवडा",
      state: "-- राज्य निवडा --",
      taluka: "-- तालुका निवडा --",
      gramPanchayat: "-- ग्रामपंचायत निवडा --",
      next: "पुढे",
      registration: "रहिवासी नोंदणी",
      chooseUserId: "यूजर आयडी निवडा",
      enterPassword: "पासवर्ड टाका",
      confirmPassword: "पासवर्डची पुष्टी करा",
      register: "नोंदणी करा",
      backToLogin: "लॉगिनवर परत जा",
      login: "लॉगिन",
      selectRole: "-- भूमिका निवडा --",
      userId: "यूजर आयडी",
      password: "पासवर्ड",
      captcha: "कॅप्चा टाका", refreshCaptcha: "कॅप्चा बदला",
      newResident: "नवीन रहिवासी? नोंदणी करा",
      back: "मागे",
      locationError: "कृपया राज्य, तालुका आणि ग्रामपंचायत निवडा",
      roleError: "कृपया भूमिका निवडा",
      captchaError: "कॅप्चा जुळत नाही",
      invalidCredentials: "लॉगिन माहिती चुकीची आहे",
      fillFields: "कृपया सर्व माहिती भरा",
      passwordsMismatch: "पासवर्ड जुळत नाहीत",
      registrationSuccess: "नोंदणी यशस्वी झाली! कृपया लॉगिन करा.",
    },
  };

  const t = translations[language];

  // Dummy registered users
  const [users, setUsers] = useState([
    { id: "admin", password: "admin", role: "Admin" },
    { id: "resident", password: "resident", role: "Resident" },
    { id: "gp101", password: "gp101", role: "Grampanchayat" },
  ]);

  const handleNext = (e) => {
    e.preventDefault();
    if (!state || !taluka || !gramPanchayat) {
      setError(t.locationError);
      return;
    }
    setError("");
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!role) {
      setError(t.roleError);
      return;
    }
    if (captchaInput !== captcha) {
      setError(t.captchaError);
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    const user = users.find(
      (u) =>
        u.id.toLowerCase() === userId.toLowerCase() &&
        u.password === password &&
        u.role === role
    );

    if (user) {
      if (user.role === "Admin") navigate("/admin-dashboard");
      else if (user.role === "Resident") navigate("/resident-dashboard");
      else navigate("/grampanchayat-dashboard");
    } else {
      setError(t.invalidCredentials);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (!userId || !password || !confirmPassword) {
      setError(t.fillFields);
      return;
    }
    if (password !== confirmPassword) {
      setError(t.passwordsMismatch);
      return;
    }

    // Save new resident
    const newUser = { id: userId, password, role: "Resident" };
    setUsers([...users, newUser]);

    alert(t.registrationSuccess);
    setIsRegister(false); // go back to login
    setUserId("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="login-page min-h-screen flex flex-col">
      {/* Header */}
      <header className="login-header flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src="/techpanchayatlogo.png"
            alt="Tech Panchayat Logo"
            className="login-logo h-14 w-14"
          />
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Tech Panchayat</h1>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800">{t.tagline}</p>
          </div>
        </div>
        <select
          className="login-language px-3 py-2"
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            localStorage.setItem("language", e.target.value);
          }}
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="mr">मराठी</option>
        </select>
      </header>

      {/* Card */}
      <main className="login-main flex-grow grid items-center gap-8 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="login-intro">
          <div className="login-photo" role="img" aria-label="Aerial view of a green village landscape" />
          <div className="login-intro-copy">
            <p className="login-eyebrow">{t.eyebrow}</p>
            <h2>{t.introTitle}</h2>
            <p className="login-description">{t.introDescription}</p>
            <div className="login-highlights">
              {t.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
            </div>
          </div>
        </section>

        <div className="login-card w-full max-w-md p-8">
          {step === 1 ? (
            <form onSubmit={handleNext} className="space-y-4">
              <h2 className="text-xl font-bold text-center mb-4">
                {t.selectLocation}
              </h2>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="login-field w-full p-3"
              >
                <option value="">{t.state}</option>
                {states.map((s, idx) => (
                  <option key={idx}>{s}</option>
                ))}
              </select>
              <select
                value={taluka}
                onChange={(e) => setTaluka(e.target.value)}
                className="login-field w-full p-3"
              >
                <option value="">{t.taluka}</option>
                {talukas.map((t, idx) => (
                  <option key={idx}>{t}</option>
                ))}
              </select>
              <select
                value={gramPanchayat}
                onChange={(e) => setGramPanchayat(e.target.value)}
                className="login-field w-full p-3"
              >
                <option value="">{t.gramPanchayat}</option>
                {gramPanchayats.map((g, idx) => (
                  <option key={idx}>{g}</option>
                ))}
              </select>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                className="login-primary w-full p-3"
              >
                {t.next}
              </button>
            </form>
          ) : isRegister ? (
            // Registration Form
            <form onSubmit={handleRegister} className="space-y-4">
              <h2 className="text-xl font-bold text-center mb-4">{t.registration}</h2>
              <input
                type="text"
                placeholder={t.chooseUserId}
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="login-field w-full p-3"
              />
              <input
                type="password"
                placeholder={t.enterPassword}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-field w-full p-3"
              />
              <input
                type="password"
                placeholder={t.confirmPassword}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="login-field w-full p-3"
              />
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                className="login-primary w-full p-3"
              >
                {t.register}
              </button>
              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="login-secondary w-full mt-2 p-3"
              >
                {t.backToLogin}
              </button>
            </form>
          ) : (
            // Login Form
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-center mb-4">{t.login}</h2>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="login-field w-full p-3"
              >
                <option value="">{t.selectRole}</option>
                <option>Admin</option>
                <option>Resident</option>
                <option>Grampanchayat</option>
              </select>
              <input
                type="text"
                placeholder={t.userId}
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={t.password}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-field w-full p-3"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {/* Captcha */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-2 bg-gray-200 rounded font-mono">
                  {captcha}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setCaptcha(generateCaptcha());
                    setCaptchaInput("");
                    setError("");
                  }}
                  className="login-captcha-refresh"
                  aria-label={t.refreshCaptcha}
                  title={t.refreshCaptcha}
                >
                  <RefreshCw size={18} />
                </button>
                <input
                  type="text"
                  placeholder={t.captcha}
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  className="login-field flex-1 p-3"
                />
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                className="login-primary w-full p-3"
              >
                {t.login}
              </button>
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="login-outline w-full mt-2 p-3"
              >
                {t.newResident}
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="login-secondary w-full mt-2 p-3"
              >
                {t.back}
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
