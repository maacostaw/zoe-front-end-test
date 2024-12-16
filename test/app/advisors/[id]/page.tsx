"use client"

import AdvisorForm from '@/components/advisorForm';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import styles from "../../../styles/app/advisors/[id]/page.module.css";

const AdvisorPage = () => {

  const router = useRouter()

  /*Id parameter of the route*/
  const { id } = useParams();

  /**Empty advisor for the initial state */
  const emptyAdvisor = {
    "id": "",
    "name": "",
    "avatar": null,
    "email": "",
    "phone": "",
    "address": "",
    "income": ""
  }
  const [advisor, setAdvisor] = useState(emptyAdvisor)

  /**State to handle the modal */
  const [modalEditVisible, setModalEditVisible] = useState(false)
  
  /**Initial state to retrieve advisor data */
  useEffect(() => {
    fetch(`http://localhost:3001/advisor/${id}`)
      .then(data => data.json())
      .then(dataJson => {

        setAdvisor(dataJson)
      })
  }, [])

  /**Function to delete the advisor */
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/advisor/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      router.push("/")

      if (!response.ok) {
        throw new Error(`Error al eliminar el recurso: ${response.status}`);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }

  /**Function that calls the api for an update */
  const onSubmit = async (data: any) => {
    const url = `http://localhost:3001/advisor/${id}`;

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      window.location.href = `/advisors/${id}`
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className={styles.pageLayout}>
      <AdvisorForm
        visible={modalEditVisible}
        setVisible={setModalEditVisible}
        advisor={advisor}
        onSubmit={onSubmit}
      />
      <div className={styles.logoContainer}>
        <img src="/zoe_logo.svg" width="100px" style={{ cursor: "pointer" }} onClick={() => router.push("/")} />
      </div>
      <div className={styles.imageSection}>
        <img
          className={styles.profilePhoto}
          src={advisor.avatar ? advisor.avatar : "/empty_profile_photo.png"}
        />
        <div style={{ display: "flex", gap: "21px" }}>
          <button className="primaryDangerButton" onClick={() => handleDelete()}>Delete</button>
          <button className="secondaryButton" onClick={() => setModalEditVisible(true)}>Edit Advisor</button>
        </div>
      </div>
      <div className={styles.infoSection}>
        <h1 className={styles.infoHeader} >{advisor && <>{advisor.name}</>}</h1>
        <div className={styles.infoField}>
          <b>ID Number</b>
          <p style={{ color: "rgba(133,133,133,1)" }}>ID: 987-345-32</p>
        </div>
        <div className={styles.infoField}>
          <b>Income</b>
          <p style={{ color: "rgba(133,133,133,1)" }}>{advisor && <>{advisor.income}</>}</p>
        </div>
        <div className={styles.infoField}>
          <b>Education</b>
          <p style={{ color: "rgba(133,133,133,1)" }}>Northeastern University</p>
        </div>
        <div className={styles.infoField}>
          <b>Title</b>
          <p style={{ color: "rgba(133,133,133,1)" }}>Financial Management</p>
        </div>
        <div className={styles.infoField}>
          <b>Years of Experience</b>
          <p style={{ color: "rgba(133,133,133,1)" }}>+10</p>
        </div>
      </div>
    </div>
  );
};

export default AdvisorPage;