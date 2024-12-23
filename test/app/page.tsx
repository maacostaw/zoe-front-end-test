"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import styles from "../styles/app/page.module.css";

export default function Home() {

  const router = useRouter()

  /**States to handle the input field logic */
  const [incomeValue, setIncomeValue] = useState("")
  const [incomeError, setIncomeError] = useState(true)

  useEffect(() => {
    if (incomeValue.length !== 5) {
      setIncomeError(true)
    } else {
      setIncomeError(false)
    }
  }, [incomeValue])

  return (
    <div className={styles.pageLayout}>
      <div className={styles.container}>
        <img src="/zoe_logo.svg" width="200px" />
        <div className={styles.infoContainer}>
          <h1>Find your company advisors!</h1>
          <p>Search by income to find your advisors</p>

        </div>
        <div className={styles.incomeInputContainer}>
          <label htmlFor="incomeInput" style={{ color: "rgba(133,133,133,1)" }}>Current income</label>
          <div className="prefixBox">
            <span>$</span>
            <input
              className="prefixBoxInput"
              type="number"
              id="incomeInput"
              value={incomeValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIncomeValue(e.target.value)}
              onKeyDown={(event)=>{
                if (event.key === "Enter" && !incomeError && incomeValue !== "") {
                  router.push(`/advisors?income=${incomeValue}&sortingParameter=id&reverseSorting=false&page=1`)
                }
              }}
            />
          </div>
          <p className={`messageError ${(incomeError && incomeValue !== "") ? "visible" : "hidden"}`}>
            Type a five digit number
          </p>
        </div>
        <button
          className={(!incomeError && incomeValue !== "") ? "primaryButton" : "primaryButton primaryButtonDisabled"}
          onClick={() => {
            if (!incomeError && incomeValue !== "") {
              router.push(`/advisors?income=${incomeValue}&sortingParameter=id&reverseSorting=false&page=1`)
            }
          }}
        >
          Search now
        </button>
      </div>

    </div>
  );
}
