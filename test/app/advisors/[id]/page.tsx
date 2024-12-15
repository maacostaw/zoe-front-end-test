"use client"

import AdvisorForm from '@/components/advisorForm';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AdvisorPage = () => {
  const { id } = useParams(); // Accede al parámetro 'id' de la ruta
  const router = useRouter()

  const [advisor, setAdvisor] = useState({
    "id": "",
    "name": "",
    "avatar": null,
    "email": "",
    "phone": "",
    "address": "",
    "income": ""
  })

  const [modalEditVisible, setModalEditVisible] = useState(false)


  useEffect(() => {
    fetch(`http://localhost:3001/advisor/${id}`)
      .then(data => data.json())
      .then(dataJson => {
        setAdvisor(dataJson)
      })
  }, [])

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

  const onSubmit = async (data: any) => {
    const url = `http://localhost:3001/advisor/${id}`; // URL de la API o endpoint

    try {
      const response = await fetch(url, {
        method: 'PUT', // Método PUT
        headers: {
          'Content-Type': 'application/json', // Asegura que el contenido se envíe como JSON
        },
        body: JSON.stringify(data), // Convierte el objeto `data` en una cadena JSON
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
    <>
      <AdvisorForm visible={modalEditVisible} setVisible={setModalEditVisible} advisor={advisor} onSubmit={onSubmit}/>
      <div>
        <img src={advisor ? advisor.avatar : null} style={{ width: "100px" }} />
        <button onClick={() => handleDelete()}>Delete</button>
        <button onClick={() => setModalEditVisible(true)}>Edit Advisor</button>
      </div>
      <div>{advisor && <>{advisor.name}</>}</div>
      <div><b>ID Number</b>ID: 987-345-32</div>
      <div><b>Income</b>{advisor && <>{advisor.income}</>}</div>
      <div><b>Education</b>Northeastern University</div>
      <div><b>Title</b>Financial Management</div>
      <div><b>Years of Experience</b>+10</div>
    </>
  );
};

export default AdvisorPage;