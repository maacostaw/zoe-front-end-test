"use client"
import AdvisorForm from "@/components/advisorForm"
import { useSearchParams, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

import styles from "../../styles/app/advisors/page.module.css";

export default function Page() {

  const router = useRouter()

  const searchParams = useSearchParams()
  const search = searchParams.get('income')

  const [advisors, setAdvisors] = useState([])
  const [modalCreateVisible, setModalCreateVisible] = useState(false)


  const filterIncome = (advisorsList) => {
    return advisorsList.filter((advisor) => {
      const cotaInferior = search - 10000
      const cotaSuperior = search + 10000
      return advisor.income >= cotaInferior && advisor.income <= cotaSuperior
    })
  }

  useEffect(() => {
    fetch("http://localhost:3001/advisor")
      .then(data => data.json())
      .then(dataJson => {
        setAdvisors(filterIncome(dataJson))
      })
  }, [])

  const emptyAdvisor = {
    "id": "",
    "name": "",
    "avatar": null,
    "email": "",
    "phone": "",
    "address": "",
    "income": ""
  }

  const onSubmit = async (data: any) => {
    const url = 'http://localhost:3001/advisor'; // URL de la API o endpoint

    try {
      const response = await fetch(url, {
        method: 'POST', // Método PUT
        headers: {
          'Content-Type': 'application/json', // Asegura que el contenido se envíe como JSON
        },
        body: JSON.stringify(data), // Convierte el objeto `data` en una cadena JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json(); // Convierte la respuesta a JSON

      router.push(`/advisors/${result.id}`)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className={styles.pageLayout}>
      <AdvisorForm visible={modalCreateVisible} setVisible={setModalCreateVisible} advisor={emptyAdvisor} onSubmit={onSubmit} />
      <div className={styles.header}>
        <img src="/zoe_logo.svg" width="100px" />
      </div>
      <div className={styles.container}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
          <h1>Advisors</h1>
          <button className="primaryButton" onClick={() => setModalCreateVisible(true)}>+ Add New Advisor</button>

        </div>

        <div>
          <div>Advisors</div>
          <input></input>
        </div>
        {advisors.map((advisor, index) => {
          return (<div key={index}>{advisor.name}</div>)
        })}
      </div>

    </div>
  )
}