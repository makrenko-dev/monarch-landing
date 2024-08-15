import React, { useState, useRef, useEffect } from "react";
import { CiCloudOn } from "react-icons/ci";
import "./ContactForm.css";
import { sendMessage } from "../http/formAPI";
import { useLanguage } from "./LanguageContext";

const ContactForm = () => {
  const { targetLanguage } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectDescription: "",
  });
  const [file, setFile] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = (e) => {

    const selectedFile = e.target.files[0];
    const fileArea = document.getElementById("fileArea");

    // Reset styling for both cases
    //fileArea.style.backgroundColor = "rgba(255, 255, 255, 0.07)";
    setBackUploadFile("rgba(255, 255, 255, 0.07)");

    if (selectedFile) {
      // Перевірка типу файлу
      if (
        [
          "application/pdf",
          "text/plain",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(selectedFile.type)
      ) {
        // File selected
        setFile(selectedFile);
      } else {
        alert("Невірний тип файлу. Дозволено лише PDF, TXT, DOC, DOCX.");
      }
    } else {
      // No file selected or Cancel button clicked
      setFile(null);
    }
    setFocusedInput(null); // Reset focusedInput when changing file input
  };

  const handleFileInputClick = (e) => {

    // Clear the file input value before opening the file selection dialog
    document.getElementById("fileInput").value = null;
    setFocusedInput(e.target); // Set focus to fileArea when clicking the file input
  };

  const handleFileUploadClick = (e) => {


    const fileArea = document.getElementById("fileArea");
    //fileArea.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    setBackUploadFile("rgba(255, 255, 255, 0.2)");

    document.getElementById("fileInput").click();
    setFocusedInput(document.getElementById("fileInput")); // Set focus to fileInput when clicking the file upload area
  };

  const handleInputFocus = (e) => {
    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    setFocusedInput(e.target);
  };

  const handleInputBlur = (e) => {
    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.07)";
    setFocusedInput(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here

    const sendformData = new FormData();
    sendformData.append("name", formData.name);
    sendformData.append("phone_number", formData.phone);
    sendformData.append("desc", formData.projectDescription);
    sendformData.append("text_file", file);

    sendMessage(sendformData);
    // Reset form data after submission if needed
    setFormData({
      name: "",
      phone: "",
      projectDescription: "",
    });

    setFile(null);
    setFocusedInput(null);
  };

  const fileInputRef = useRef(null);
  const [backUploadFile, setBackUploadFile] = useState("rgba(255, 255, 255, 0.07)");

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.addEventListener("cancel", handleFileCancel);
    }
  }, []); // Запускається лише один раз після першого візуалізації

  const handleFileCancel = (event) => {
    // ... ваша логіка обробки зміни файлу

    setBackUploadFile("rgba(255, 255, 255, 0.07)");
    setFocusedInput(null);
  };

  return (
    <div  id="contactform" style={{ zIndex: "1150" }} className="contain1">
      <h1 className="h1con">{targetLanguage === "Uk" ? `Зв’язатися з нами` : `Contact Us`}</h1>
      <form onSubmit={handleSubmit} style={{ width: "90%", margin: "0 auto" }} className="f1">
        <div className="rt1" style={{ display: "flex", justifyContent: "space-between", zIndex: "1150" }}>
          <div
            className="rt2"
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              marginRight: "20px",
              color: "white",
              zIndex: "1150",
            }}
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              required
              placeholder={targetLanguage === "Uk" ? "ВАШЕ ІМ'Я" : "YOUR NAME"}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.07)",
                borderRadius: "15px",
                border: "1px solid white",
                height: "60px",
                color: "white",
                padding: "20px",
                paddingLeft: window.innerWidth <= 928 ? "30px" : "50px",
                marginBottom: "10px",
                fontSize: window.innerWidth <= 928 ? "15px" : "20px",
                zIndex: "1150",
              }}
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              required
              placeholder="095-309-51-05"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.07)",
                borderRadius: "15px",
                border: "1px solid white",
                height: "60px",
                color: "white",
                padding: "20px",
                paddingLeft: window.innerWidth <= 928 ? "30px" : "50px",
                marginBottom: "10px",
                fontSize: window.innerWidth <= 928 ? "15px" : "20px",
                zIndex: "1150",
              }}
            />
            <textarea
              id="projectDescription"
              name="projectDescription"
              className="pd"
              value={formData.projectDescription}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              required
              placeholder={targetLanguage === "Uk" ? "ОПИС ПРОЕКТУ АБО ЗАВДАННЯ" : "DESCRIPTION OF THE PROJECT OR TASK"}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.07)",
                borderRadius: "15px",
                border: "1px solid white",
                fontSize: window.innerWidth <= 928 ? "15px" : "20px",
                height: "200px",
                color: "white",
                padding: "20px",
                paddingLeft: window.innerWidth <= 928 ? "30px" : "50px",
                zIndex: "1150",
              }}
            />
          </div>

          <div
            style={{
              flex: 1,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              zIndex: "1150",
            }}
          >
            <label
              htmlFor="file"
              id="fileArea"
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                backgroundColor: backUploadFile,
                fontSize: window.innerWidth <= 928 ? "15px" : "20px",
                padding: "20px",
                zIndex: "1150",
                borderRadius: "15px",
                border: "1px solid white",
                color: "white",
              }}
              onClick={handleFileUploadClick}
            >
              <CiCloudOn
                className="cic"
                style={{ fontSize: "54px", marginBottom: "8px", color: "white", marginTop: "15%" }}
              />
              <span className="spz">{targetLanguage === "Uk" ? "ЗАВАНТАЖИТИ ФАЙЛ" : "UPLOAD FILE"}</span>
              {file && (
                <p className="pincont">
                  {targetLanguage === "Uk" ? `Обраний файл: ${file.name}` : `Selected file: ${file.name}`}
                </p>
              )}
            </label>
            <input
              type="file"
              id="fileInput"
              name="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              onClick={handleFileInputClick}
              style={{ display: "none" }}
            />
            <div id="result"></div>
          </div>
        </div>

        <button
          type="submit"
          className="btn1"
          style={{
            position: "relative",
            width: "100%",
            padding: "15px",
            margin: "30px auto 60px",
            background: "linear-gradient(45deg, #FF8A1E, rgba(235, 255, 0, 0.5))",
            color: "white",
            zIndex: "1350",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {targetLanguage === "Uk" ? "ВІДПРАВИТИ ЗАЯВКУ" : "SEND APPLICATION"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
