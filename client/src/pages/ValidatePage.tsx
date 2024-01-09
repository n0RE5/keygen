import { validateKey } from '@/api/keysAPI'
import Layout from '@/components/Layout/Layout'
import React, { useState } from 'react'

const ValidatePage = () => {
    const [validated, setValidated] = useState(false)
    const [key, setKey] = useState('')
    const [error, setError] = useState('')
    const handleClick = async () => {
        try {
            setValidated(false)
            setError('')
            const response = await validateKey(key)
            setValidated(response)
            return 
        } catch (e: any) {
            setError(e.response.data.message)
        }
    }

    return (
        <Layout>
            <div className="container">
                <div className="key_title">Validate Key Test: {validated ? 'Validated' : error}</div>
                <input className="key_input" type="text" onChange={(e) => setKey(e.target.value)} value={key} />
                <button className="key_button" onClick={handleClick}>Validate key</button>
            </div>
        </Layout>
    );
}

export default ValidatePage;