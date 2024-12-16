"use client"
import AdvisorForm from "@/components/advisorForm"
import { useSearchParams, useRouter } from "next/navigation"
import React, { useEffect, useRef, useState } from "react"

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

  /*We are going to have an state for the text box*/
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);

  /**Here we are going to wait a few seconds and set up the search */
  useEffect(() => {
    setIsWaiting(true);
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setIsWaiting(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [search])

  /**Then the search is going to filter the names */
  useEffect(()=>{
    if(debouncedSearch === "") {
      const filteredAdvisors = advisors.filter((advisor: Advisor, index: number) => {
        return (index >= ((parseInt(page) - 1) * 10) && index < (parseInt(page) * 10))
      })
      setVisibleAdvisors(filteredAdvisors)
    } else {
      const filteredAdvisors = advisors.filter((advisor: Advisor) => {
        return advisor.name!.toLowerCase().startsWith(debouncedSearch.toLowerCase())
      })
      setVisibleAdvisors(filteredAdvisors)
    }
  },[debouncedSearch])

  /**We are going to have a state that only shows the data we want */
  const [visibleAdvisors, setVisibleAdvisors] = useState<Advisor[]>([])

  useEffect(() => {
    const filteredAdvisors = advisors.filter((advisor: Advisor, index: number) => {
      return (index >= ((parseInt(page) - 1) * 10) && index < (parseInt(page) * 10))
    })
    setVisibleAdvisors(filteredAdvisors)
  }, [advisors])

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
        <img src="/zoe_logo.svg" width="100px" style={{ cursor: "pointer" }} onClick={() => router.push("/")} />
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
            <div className="prefixBox">
              <input
                type="text"
                placeholder="Search for a name!"
                className="prefixBoxInput"
                id="searchedName"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
              />
            </div>

          </div>
          <div>
            <div className={styles.tableRow} style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0" }}>
              <div
                style={{ fontWeight: sortingParameter === "name" ? "900" : "500", padding: "7px 0px 7px 14px" }}
                className={styles.tableColumn}
                onClick={() => {
                  if(debouncedSearch === "" && search === "") {
                    goToRouteFilter("name")
                  }
                }}
              >
                Advisor Name {sortingParameter === "name" ? (reverseSorting ? "⇑" : "⇓") : "⇕"}
              </div>
              <div
                style={{ fontWeight: sortingParameter === "income" ? "900" : "500", padding: "7px 14px 7px 0px" }}
                className={styles.tableColumn}
                onClick={() => {
                  if(debouncedSearch === "" && search === "") {
                    goToRouteFilter("income")
                  }
                }}
              >
                Income {sortingParameter === "income" ? (reverseSorting ? "⇑" : "⇓") : "⇕"}
              </div>
            </div>
            {advisors.length === 0 &&
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src="/no_data_found.jpg" style={{ width: "400px" }} />
                <p>No available Advisors based on the provided income. Please try a different income value..</p>
              </div>
            }
            {visibleAdvisors.map((advisor, index) => {
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
            })}
          </div>
          {search === "" ? (
            <div className={styles.tableFooter}>

              <p className={styles.tableFooterSpan}>
                {advisors.length === advisors.length % 10 + (parseInt(page) - 1) * 10 ? advisors.length : parseInt(page) * 10} of {advisors.length} Advisors
              </p>
              <h2
                className={styles.tableFooterArrow}
                style={{ visibility: parseInt(page) > 1 ? "visible" : "hidden" }}
                onClick={() => goToRoutePage(parseInt(page) - 1)}
              >
                {"<"}
              </h2>
              <h2 className={styles.tableFooterNumber}>{page}</h2>
              <h2
                className={styles.tableFooterArrow}
                style={{ visibility: ((parseInt(page) - 1) * 10) < (advisors.length - advisors.length % 10) ? "visible" : "hidden" }}
                onClick={() => goToRoutePage(parseInt(page) + 1)}
              >
                {">"}
              </h2>
            </div>
          ) :
            <p style={{ display: "flex", justifyContent: "center", color:"grey" }}>
              {isWaiting ? "Waiting for you to stop typing" : "You need to empty the search name input in order to reactivate navigation and filters"}
            </p>
          }
        </div>
      </div>
    </div>
  )
}