// ModalComponent.js
"use client"; // This ensures the component uses client-side rendering

import React, { useState } from "react";
import styles from "../../Blog.module.css";
import Image from "next/image";

const ModalComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
    <div className={styles.Ads} >
    <div className={styles.blogButton}>
        <div className={styles.whatsappButton}>
          <button
            className={styles.blogBtn}
            onClick={() =>
              window.open(
                "https://wa.me/7020045454?text=Hi%20there,%20I'm%20interested%20in%20your%20services.",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            <Image
              width="25"
              height="25"
              src="https://img.icons8.com/color/48/whatsapp--v1.png"
              alt="whatsapp"
            />
            Connect with WhatsApp
          </button>
        </div>
        <div className={styles.appointmentButton}>
          <button
            className={styles.blogBtn}
            onClick={() =>
              window.open(
                "https://calendar.app.google/fWAtE1o6PaUALRDcA",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            <Image
              width="25"
              height="25"
              src="https://img.icons8.com/color/48/tear-off-calendar--v1.png"
              alt="appointment"
            />
            Book an Appointment
          </button>
        </div>
      </div>
    </div>      
     {/* {isModalOpen && <Modal closeModal={() => setModalOpen(false)} />} */}
    </>
  );
};

export default ModalComponent;