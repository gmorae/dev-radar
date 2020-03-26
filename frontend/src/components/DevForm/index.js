import React, { useState, useEffect } from 'react'

import './style.css'

function DevForm({ onSubmit }) {

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords
                setLatitude(latitude)
                setLongitude(longitude)
            }, (err) => {
                console.log(err)
            },
            {
                timeout: 30000,
            }

        )
    }, [])

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [github_username, setUsernameGithub] = useState('')
    const [techs, setTechs] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        await onSubmit({
            github_username,
            techs,
            longitude,
            latitude
        })

        setTechs('')
        setUsernameGithub('')
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="input-block">

                <label htmlFor="github_username">Usuário do github</label>
                <input
                    id="github_username"
                    name="github_username"
                    required
                    value={github_username}
                    onChange={e => setUsernameGithub(e.target.value)}
                />

            </div>

            <div className="input-block">

                <label htmlFor="techs">Tecnologia</label>
                <input
                    id="techs"
                    name="techs"
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />

            </div>

            <div className="input-group">
                <div className="input-block">

                    <label htmlFor="latitude">Latitude</label>
                    <input
                        id="latitude"
                        name="latitude"
                        required
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />

                </div>

                <div className="input-block">

                    <label htmlFor="longitude">Longitude</label>
                    <input
                        id="longitude"
                        name="longitude"
                        required
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />

                </div>
            </div>

            <button type="submit">Cadastrar</button>

        </form>
    )
}

export default DevForm 