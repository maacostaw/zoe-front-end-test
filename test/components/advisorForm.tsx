import React, { useState, useEffect } from "react";
import styles from "../styles/components/advisorForm.module.css";

interface Advisor {
    id?: string;
    name?: string;
    avatar?: string | null;
    email?: string;
    phone?: string;
    address?: string;
    income?: string;
}

const AdvisorForm = (
    { visible, setVisible, advisor, onSubmit } : { visible: boolean, setVisible: (visible: boolean) => void, advisor: Advisor, onSubmit: (data:any) => void }
) => {

    const inputRef = React.useRef(null);
    const handleClick = React.useCallback(() => inputRef.current?.click(), []);

    const [imageBase64, setImageBase64] = useState<string | null>(null);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [idNumber, setIdNumber] = useState<string>("");
    const [income, setIncome] = useState<string>("");
    const [education, setEducation] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    const [yearsOfExperience, setYearsOfExperience] = useState('');

    const yearsOfExperienceOptions = {
        'less-than-one': '<1',
        'more-than-one': '+1',
        'more-than-three': '+3',
        'more-than-five': '+5',
        'more-than-ten': '+10'
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Convertir el archivo a base64 usando FileReader
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBase64(reader.result as string); // Almacenar el base64 en el estado
            };
            reader.readAsDataURL(file); // Convierte el archivo a base64
        }
    };

    const submitInfo = async () => {
        const data = {
            name: firstName,
            avatar: imageBase64,
            email: "john.doe@zoefin.com",
            phone: "123-456-7890",
            address: "123 Main St, San Francisco, CA 94101",
            income: income
        };

        onSubmit(data)
    }

    useEffect(()=> {
        setImageBase64(advisor.avatar ? advisor.avatar : null)
        setFirstName(advisor.name ? advisor.name : "")
        setLastName("")
        setIdNumber("")
        setIncome(advisor.income ? advisor.income : "")
        setEducation("")
        setYearsOfExperience("")
    }, [visible])

    return (
        <>
            {visible ? (
                <div
                    className={styles.backgroundLayer}
                    onClick={() => setVisible(false)}
                >
                    <div
                        className={styles.formContainer}
                        onClick={(e) => { e.stopPropagation() }}
                    >
                        <h1>
                            {advisor.id ? "Edit" : "Create"} Advisor Information
                        </h1>
                        <div>
                            <div></div>
                            <label htmlFor="imageInput">Selecciona una imagen:</label>
                            <input
                                type="file"
                                id="imageInput"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{ width: "0px" }}
                                ref={inputRef}
                            />
                            <button onClick={() => handleClick()}>Upload Picture</button>
                            {imageBase64 ? <img src={imageBase64} alt="Imagen cargada" style={{ width: "150px", height: "150px" }} /> : <p>No se ha cargado ninguna imagen</p>}
                        </div>
                        <div>
                            <div>
                                <label htmlFor="firstNameInput">First Name</label>
                                <input
                                    type="text"
                                    id="firstNameInput"
                                    value={firstName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="lastNameInput">Last Name</label>
                                <input
                                    type="text"
                                    id="lastNameInput"
                                    value={lastName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="idNumberInput">ID Number</label>
                                <input
                                    type="text"
                                    id="idNumberInput"
                                    value={idNumber}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIdNumber(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="incomeInput"></label>
                                <div className="prefixBox">
                                    <span>$</span>
                                    <input
                                        className="prefixBoxInput"
                                        type="number"
                                        id="incomeInput"
                                        value={income}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIncome(e.target.value)}
                                    />
                                </div>

                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="educationInput">Education</label>
                                <input
                                    type="text"
                                    id="educationInput"
                                    value={education}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEducation(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="titleInput">Title</label>
                                <input
                                    type="text"
                                    id="titleInput"
                                    value={title}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="experience">Selecciona tu experiencia:</label>
                            <select
                                id="experience"
                                value={yearsOfExperience}
                                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                    setYearsOfExperience(event.target.value);
                                }}
                            >
                                {Object.entries(yearsOfExperienceOptions).map(([value, label]) => (
                                    <option key={value} value={value}>
                                        {label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button onClick={() => setVisible(false)}>Go Back</button>
                            <button onClick={() => submitInfo()}>{advisor.id ? "Save Changes" : "Create Advisor"}</button>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>

    )
}

export default AdvisorForm;