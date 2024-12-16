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
    { visible, setVisible, advisor, onSubmit }:
        { visible: boolean, setVisible: (visible: boolean) => void, advisor: Advisor, onSubmit: (data: any) => void }
) => {

    /**Ref to use the image input button */
    const inputRef = React.useRef(null);
    const handleClickOverImageInput = () => inputRef.current?.click();

    /**Function that parses an image to a blob */
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

    /**States for the fields of the form */
    const [imageBase64, setImageBase64] = useState<string | null>(null);
    const [firstName, setFirstName] = useState<string>("");
    const [firstNameError, setFirstNameError] = useState<boolean>(true);
    const [lastName, setLastName] = useState<string>("");
    const [idNumber, setIdNumber] = useState<string>("");
    const [income, setIncome] = useState<string>("");
    const [incomeError, setIncomeError] = useState<boolean>(true);
    const [education, setEducation] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [yearsOfExperience, setYearsOfExperience] = useState('');

    /**Options for years of experience */
    const yearsOfExperienceOptions = {
        'less-than-one': '<1',
        'more-than-one': '+1',
        'more-than-three': '+3',
        'more-than-five': '+5',
        'more-than-ten': '+10'
    };

    /**Function for building the object that is going to be submited */
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

    /**Each time the modal closes, the state goes to its initial props */
    useEffect(() => {
        setImageBase64(advisor.avatar ? advisor.avatar : null)
        setFirstName(advisor.name ? advisor.name : "")
        setLastName("")
        setIdNumber("")
        setIncome(advisor.income ? advisor.income : "")
        setEducation("")
        setYearsOfExperience("")
    }, [visible])

    /**Review if the income change follows the rules */
    useEffect(() => {
        if (income.length !== 5) {
            setIncomeError(true)
        } else {
            setIncomeError(false)
        }
    }, [income])

    /**Review if the name change follows the rules */
    useEffect(() => {
        if (firstName.length === 0) {
            setFirstNameError(true)
        } else {
            setFirstNameError(false)
        }
    }, [firstName])

    if (visible) {
        return (
            <div className={styles.backgroundLayer} onClick={() => setVisible(false)}>
                <div className={styles.formContainer} onClick={(e) => { e.stopPropagation() }}>
                    <h3 className={styles.formContainerTop}>
                        {advisor.id ? "Edit" : "Create"} Advisor Information
                    </h3>
                    <div className={styles.formContainerMiddle}>
                        <div className={styles.imageSection}>
                            <img
                                className={styles.profilePhoto}
                                src={imageBase64 ? imageBase64 : "/empty_profile_photo.png"}
                            />
                            <input
                                type="file"
                                id="imageInput"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{ width: "0px" }}
                                ref={inputRef}
                            />
                            <button
                                className="secondaryButton"
                                onClick={() => handleClickOverImageInput()}
                            >
                                Upload Picture
                            </button>
                            <button
                                className="primaryDangerButton"
                                onClick={() => setImageBase64(null)}
                            >
                                Remove
                            </button>
                        </div>
                        <div className={styles.fieldsContainer}>
                            <div className={styles.fieldContainer}>
                                <label htmlFor="firstNameInput">First Name</label>
                                <div className="prefixBox">
                                    <input
                                        className="prefixBoxInput"
                                        type="text"
                                        id="firstNameInput"
                                        value={firstName}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <p className={`messageError ${(firstNameError) ? "visible" : "hidden"}`}>
                                    Type advisor's first name
                                </p>
                            </div>
                            <div className={styles.fieldContainer}>
                                <label htmlFor="lastNameInput">Last Name</label>
                                <div className="prefixBox">
                                    <input
                                        className="prefixBoxInput"
                                        type="text"
                                        id="lastNameInput"
                                        value={lastName}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                                    />
                                </div>
                                <p className={"hidden"}>
                                    Type advisor's second name
                                </p>
                            </div>
                        </div>
                        <div className={styles.fieldsContainer}>
                            <div className={styles.fieldContainer}>
                                <label htmlFor="idNumberInput">ID Number</label>
                                <div className="prefixBox">
                                    <input
                                        className="prefixBoxInput"
                                        type="text"
                                        id="idNumberInput"
                                        value={idNumber}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIdNumber(e.target.value)}
                                    />
                                </div>
                                <p className={"hidden"}>
                                    Type advisor's id number
                                </p>
                            </div>
                            <div className={styles.fieldContainer}>
                                <label htmlFor="incomeInput">Income</label>
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
                                <p className={`messageError ${(incomeError) ? "visible" : "hidden"}`}>
                                    Type a five digit number
                                </p>
                            </div>
                        </div>
                        <div className={styles.fieldsContainer}>
                            <div className={styles.fieldContainer}>
                                <label htmlFor="educationInput">Education</label>
                                <div className="prefixBox">
                                    <input
                                        className="prefixBoxInput"
                                        type="text"
                                        id="educationInput"
                                        value={education}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEducation(e.target.value)}
                                    />
                                </div>
                                <p className={"hidden"}>
                                    Type advisor's education
                                </p>
                            </div>
                            <div className={styles.fieldContainer}>
                                <label htmlFor="titleInput">Title</label>
                                <div className="prefixBox">
                                    <input
                                        className="prefixBoxInput"
                                        type="text"
                                        id="titleInput"
                                        value={title}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                                    />
                                </div>
                                <p className={"hidden"}>
                                    Type advisor's title
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                            <label htmlFor="experience">Selecciona tu experiencia:</label>
                            <div className="prefixBox">
                                <select
                                    className="prefixBoxInput"
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

                        </div>
                    </div>

                    <div className={styles.formContainerBottom}>
                        <button
                            className="secondaryButton"
                            onClick={() => setVisible(false)}
                        >
                            Go Back
                        </button>
                        <button
                            className={(!incomeError && !firstNameError) ? "primaryButton" : "primaryButton primaryButtonDisabled"}

                            onClick={() => {
                                if (!incomeError && !firstNameError) {
                                    submitInfo()
                                }
                            }}
                        >
                            {advisor.id ? "Save Changes" : "Create Advisor"}
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<></>)
    }
}

export default AdvisorForm;