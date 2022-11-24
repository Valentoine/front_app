import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
              <a href="#" class="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                <strong>Hello la zone</strong>
              </a>
            </div>
          </div>
        </header>

        <main>
          <section class="py-5 text-center container">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Bienvenue utilisatrique</h1>
                <p class="lead text-muted">Tu as rejoint cette aventure. </p>
                <p>
                  <a href="#" class="btn btn-primary my-2">Boutton 1</a>
                  <a href="#" class="btn btn-secondary my-2">Boutton 2</a>
                </p>
              </div>
            </div>
          </section>

          <div class="album py-5 bg-light">
            <div class="container">

              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                <div class="col">
                  <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Chuut</text>
                    </svg>
                    <div class="card-body">
                      <p class="card-text">Ceci est la phrase lol</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">Boutton 1</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Boutton 2</button>
                        </div>
                        <small class="text-muted">Anecdote</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Chuut</text>
                    </svg>
                    <div class="card-body">
                      <p class="card-text">Ceci est la phrase lol</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">Boutton 1</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Boutton 2</button>
                        </div>
                        <small class="text-muted">Anecdote</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Chuut</text>
                    </svg>
                    <div class="card-body">
                      <p class="card-text">Ceci est la phrase lol</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">Boutton 1</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Boutton 2</button>
                        </div>
                        <small class="text-muted">Anecdote</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer class="text-muted py-5">
          <div class="container">
            <p class="float-end mb-1">
              Que du love bébé
            </p>
            <p class="mb-1">Fait par société à capital</p>
          </div>
        </footer>

      </body>
    </div>
    );
}

export default App;
