import React from "react";

// Optional: If you're using a toast library like react-toastify
import toast from "react-hot-toast";

// Call this once in your app entry point
// toast.configure();

const PhoneLink = ({ phoneNumber, className = "", label = "Call Us Now" }) => {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const handleClick = (e) => {
    if (!isMobile) {
      e.preventDefault(); // Prevent default <a href> behavior on desktop
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          toast.success("Phone number copied");
        })
        .catch(() => {
          toast.error("Failed to copy phone number");
        });
    }
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      className={className}
      onClick={handleClick}
      aria-label="Get Free Consultations"
    >
      {label}
    </a>
  );
};

export default PhoneLink;
