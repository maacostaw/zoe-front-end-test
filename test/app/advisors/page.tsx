"use client"
import AdvisorForm from "@/components/advisorForm"
import { useSearchParams, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

import styles from "../../styles/app/advisors/page.module.css";

interface Advisor {
  id?: string;
  name?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  address?: string;
  income?: string;
}

export default function Page() {

  /*Variables related to the route*/
  const router = useRouter()

  const searchParams = useSearchParams()
  const incomeValue = searchParams.get('income')
  const sortingParameter = searchParams.get('sortingParameter') as keyof Advisor;
  const reverseSorting = searchParams.get('reverseSorting') === "true";
  const page = searchParams.get('page') ?? "1";

  /**Receives a parameter to filter and the sorting order*/
  const goToRouteFilter = (param: keyof Advisor) => {
    const revSorting = sortingParameter === param ? !reverseSorting : false;
    window.location.href = `/advisors?income=${incomeValue}&sortingParameter=${param}&reverseSorting=${revSorting}&page=1`
  }

  /**Receives a page and goes to that page*/
  const goToRoutePage = (newPage: number) => {
    window.location.href = `/advisors?income=${incomeValue}&sortingParameter=${sortingParameter}&reverseSorting=${reverseSorting}&page=${newPage}`
  }

  /**State to control modal */
  const [modalCreateVisible, setModalCreateVisible] = useState(false)
  /**Empty advisor for the modal */
  const emptyAdvisor = {
    "id": "",
    "name": "",
    "avatar": null,
    "email": "",
    "phone": "",
    "address": "",
    "income": ""
  }

  /**Advisors */
  const [advisors, setAdvisors] = useState<Advisor[]>([])

  /**Function to sort the list of advisors based on a given attribute */
  const sortAdvisors = <T extends keyof Advisor>(advisors: Advisor[], ascending: boolean, sortingParameter: T) => {
    advisors.sort((advisor1: Advisor, advisor2: Advisor) => {
      const result = (advisor1[sortingParameter] > advisor2[sortingParameter]) ? 1 : -1;
      return ascending ? result : result * -1
    })
  }

  /**Function to filter the advisors with +10000 or -10000 income*/
  const filterIncome = (advisorsList: Advisor[]) => {
    return advisorsList.filter((advisor: Advisor) => {
      const cotaInferior = parseInt(incomeValue ? incomeValue : "0") - 10000
      const cotaSuperior = parseInt(incomeValue ? incomeValue : "0") + 10000
      const advisorIncome = parseInt(advisor.income ? advisor.income : "0")
      return advisorIncome >= cotaInferior && advisorIncome <= cotaSuperior
    })
  }

  /**Init the advisors */
  useEffect(() => {
    fetch("http://localhost:3001/advisor")
      .then(data => data.json())
      .then(dataJson => {
        const resultFilterByIncome = filterIncome(dataJson)
        sortAdvisors(resultFilterByIncome, reverseSorting, sortingParameter)
        setAdvisors(resultFilterByIncome)
      })
  }, [])

  /**Function to call the api and create an advisor */
  const onSubmit = async (data: any) => {
    const url = 'http://localhost:3001/advisor';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      router.push(`/advisors/${result.id}`)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className={styles.pageLayout}>
      <AdvisorForm
        visible={modalCreateVisible}
        setVisible={setModalCreateVisible}
        advisor={emptyAdvisor}
        onSubmit={onSubmit}
      />
      <div className={styles.logoContainer}>
        <img src="/zoe_logo.svg" width="100px" style={{cursor:"pointer"}} onClick={()=>router.push("/")}/>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Advisors</h1>
          <button className="primaryButton" onClick={() => setModalCreateVisible(true)}>
            + Add New Advisor
          </button>
        </div>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <h2>Advisors found</h2>
            <input></input>
          </div>
          <div>
            <div className={styles.tableRow} style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0" }}>
              <div
                style={{ fontWeight: sortingParameter === "name" ? "900" : "500", padding: "7px 0px 7px 14px" }}
                className={styles.tableColumn}
                onClick={() => goToRouteFilter("name")}
              >
                Advisor Name {sortingParameter === "name" ? (reverseSorting ? "⇑" : "⇓") : "⇕"}
              </div>
              <div
                style={{ fontWeight: sortingParameter === "income" ? "900" : "500", padding: "7px 14px 7px 0px" }}
                className={styles.tableColumn}
                onClick={() => goToRouteFilter("income")}
              >
                Income {sortingParameter === "income" ? (reverseSorting ? "⇑" : "⇓") : "⇕"}
              </div>
            </div>
            {advisors.map((advisor, index) => {
              if (index >= ((parseInt(page) - 1) * 10) && index < (parseInt(page) * 10)) {
                return (
                  <div key={index} className={styles.tableRow} title="See advisor Details">
                    <div
                      className={styles.tableColumn}
                      onClick={() => router.push(`/advisors/${advisor.id}`)}
                    >
                      {advisor.name}
                    </div>
                    <div
                      className={styles.tableColumn}
                      onClick={() => router.push(`/advisors/${advisor.id}`)}
                    >
                      $ {advisor.income}
                    </div>
                  </div>
                )
              } else {

              }
            })}
          </div>
          <div className={styles.tableFooter}>
            <p className={styles.tableFooterSpan}>
              {advisors.length === advisors.length % 10 + (parseInt(page) - 1) * 10 ? advisors.length : parseInt(page) * 10} of {advisors.length} Advisors
            </p>
            <h2
              className={styles.tableFooterArrow}
              style={{ visibility: parseInt(page) > 1 ? "visible" : "hidden" }}
              onClick={()=>goToRoutePage(parseInt(page)-1)}
            >
              {"<"}
            </h2>
            <h2 className={styles.tableFooterNumber}>{page}</h2>
            <h2
              className={styles.tableFooterArrow}
              style={{ visibility: ((parseInt(page) - 1) * 10) < (advisors.length - advisors.length % 10) ? "visible" : "hidden" }}
              onClick={()=>goToRoutePage(parseInt(page)+1)}
            >
              {">"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}