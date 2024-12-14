"use client"
import { useSearchParams } from "next/navigation"
import React, {useEffect, useState} from "react"

export default function Page() {

    const searchParams = useSearchParams()

    const search = searchParams.get('income')

    const [advisors, setAdvisors] = useState([])

    const filterIncome = (advisorsList) => {
        return advisorsList.filter((advisor) => {
            const cotaInferior = search - 10000
            const cotaSuperior = search + 10000
            return advisor.income >= cotaInferior && advisor.income <= cotaSuperior
        })
    }

    useEffect(()=>{
        fetch("http://localhost:3001/advisor")
        .then(data => data.json())
        .then(dataJson => {setAdvisors(filterIncome(dataJson))})
    }, [])

    return(
        <>
            <h1>Advisors</h1>
            <div>
                <div>Advisors</div>
                <input>Search</input>
            </div>
            {advisors.map((advisor)=> {
                
            })

            }
        </>
    )
}