"use client"

import Image from "next/image";
import styles from "./page.module.css";

import {useState, useEffect} from "react"
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const [incomeValue, setIncomeValue] = useState("")
  const [incomeError, setIncomeError] = useState(true)

  useEffect(() => {
    if(incomeValue.length !== 5) {
      setIncomeError(true)
    } else {
      setIncomeError(false)
    }
  },[incomeValue])

  return (
    <>
      <div>Find your company advisors</div>
      <p>Search by income to find your advisors</p>
      <label>current income</label>
      <input type="number" value={incomeValue} onChange={(e) => setIncomeValue(e.target.value)}></input>
      {incomeError && <p>Ingresa un numero de cinco digitos</p>}
      <button onClick={()=>{
        if(!incomeError) {
          router.push(`/advisorslist?income=${incomeValue}`)}}
        }
      >
          Search now
      </button>
    </>
  );
}
