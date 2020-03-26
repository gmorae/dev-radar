import React, { useEffect, useState } from 'react';

import api from './services/api'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

import './App.css';
import './global.css'
import './sidebar.css'
import './main.css'

function App() {

  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const res = await api.get('/devs')

      setDevs(res.data)
    }

    loadDevs()
  })

  async function handleDev(data) {

    const res = await api.post('/devs', data)

    setDevs([...devs, res.data])
  }

  return (
    <div className="App">
      <aside>

        <strong>Cadastrar</strong>

        <DevForm  onSubmit={handleDev} />

      </aside>

      <main>
        <ul>

          {
            devs.map(dev => (
              <DevItem dev={dev} key={dev._id} />
            ))
          }

        </ul>
      </main>

    </div >
  );
}

export default App;
