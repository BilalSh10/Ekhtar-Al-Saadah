import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./navbar.css"

const Navbar = () => {
  return (
    <main className="nav-b">
      <div class="container">
        <br />
          <h1 className='title'>Ekhtar Al-Sa'adah</h1>
          <hr />
          <ul class="navbar">
              <li class="nav-item"><a href="p" class="nav-link title-item">Home</a></li>
              <li class="nav-item"><a href="p" class="nav-link title-item">Events</a></li>
              <li class="nav-item"><a href="o" class="nav-link title-item">Past events</a></li>
              <li class="nav-item"><a href="o" class="nav-link title-item">Articals</a></li>
              <li class="nav-item"><a href="y" class="nav-link title-item">About</a></li>
              <li class="nav-item"><a href="r" class="nav-link title-item">Donate</a></li>
              <li class="nav-item"><a href="q" class="nav-link title-item">Contact us</a></li>
          </ul>
          <hr />
      </div>

    </main>
  )
}


{/* <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
              <span class="fs-4 title">Ekhtar-Al-Saadah</span>
          </a>

          <ul class="nav nav-pills">
              <li class="nav-item"><a href="p" class="nav-link title-item">Home</a></li>
              <li class="nav-item"><a href="p" class="nav-link title-item">Events</a></li>
              <li class="nav-item"><a href="o" class="nav-link title-item">Past events</a></li>
              <li class="nav-item"><a href="o" class="nav-link title-item">Articals</a></li>
              <li class="nav-item"><a href="y" class="nav-link title-item">About</a></li>
              <li class="nav-item"><a href="r" class="nav-link title-item">Donate</a></li>
              <li class="nav-item"><a href="q" class="nav-link title-item">Contact us</a></li>
          </ul>
          </header> */}

export default Navbar