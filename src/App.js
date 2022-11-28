import React, { useReducer, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <body>
        <header>
          <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
              <a href="#" class="navbar-brand d-flex align-items-center">
                <img src ="logo.png" alt="My Happy SVG" id="logo"/>
                <strong>S E X E, JM LE S E XE</strong>
              </a>
            </div>
          </div>
        </header>

        <main>
          <section id="begin_bkg" class="py-4 text-center">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Bienvenue utilisatrique</h1>
                <p class="lead text-black-50">Tu as rejoint cette aventure. </p>
                <p>
                  <a href="" class="btn btn-primary my-2 mx-2">J'aime la saucisse</a>
                  <a href="" class="btn btn-secondary my-2 mx-2">T'es con Jérôme</a>
                </p>
              </div>
            </div>
          </section>

          <div class="album py-5 bg-light">
            <div class="container">

              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                <div class="col">
                  <div class="card shadow-sm">
                    <img src="https://media.tenor.com/uEoE0W4-UEoAAAAM/confused-lady-math-lady.gif" class="card-img-top card_image bd-placeholder-img" alt="..."></img>
                    <div class="center fs-5 text-white fw-semibold">Enigme 1</div>
                    <div class="card-body">
                      <p class="card-text">Ceci est la phrase lol</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <form class="row g-3" onSubmit={handleSubmit}>
                          <div class="col-auto">
                            <input name="name" class="form-control form-control-sm" type="text" placeholder="mmmhh?"/>
                          </div>
                          <div class="col-auto">
                            <button type="submit" class="btn btn-sm btn-outline-secondary">Allez tente !</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <img src="http://img0.joyreactor.com/pics/post/erotic-boobs-lesbian-gif-1130938.gif" class="card-img-top card_image bd-placeholder-img" alt="..."></img>
                    <div class="center fs-5 text-white fw-semibold">Enigme 2</div>
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
                  <img src="https://media.tenor.com/7Hz6nvBBC3QAAAAC/cats-chess.gif" class="card-img-top card_image bd-placeholder-img" alt="..."></img>
                  <div class="center fs-5 text-white fw-semibold">Enigme 3</div>
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
                    <img src="https://i.imgur.com/Ub3U01z.gif" class="card-img-top card_image bd-placeholder-img" alt="..."></img>
                    <div class="center fs-5 text-white fw-semibold">Enigme 4</div>
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
                    <img src="https://media4.giphy.com/media/xghFgmOKbk0G4/200w.webp?cid=ecf05e47k9xzioh1hx6754bros9qg3rcnma5r9vc47hjuw92&rid=200w.webp&ct=g" class="card-img-top card_image bd-placeholder-img" alt="..."></img>
                    <div class="center fs-5 text-white fw-semibold">Enigme 5</div>
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
                    <img src="https://media3.giphy.com/media/llZVEOIi9tCVxFskpY/giphy.gif?cid=ecf05e47nw19xgosyve3zpw4wq4z1qxikuweisq8xzhc1ezd&rid=giphy.gif&ct=g" class="card-img-top card_image bd-placeholder-img" alt="..."></img>
                    <div class="center fs-5 text-white fw-semibold">Enigme 6</div>
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
                    <img src="https://media0.giphy.com/media/l2JedjCkIJxQvRZmM/200.webp?cid=ecf05e47lyqvs2w21xm4daz0an16c91za4pb841k91944zch&rid=200.webp&ct=g" class="card-img-top card_image bd-placeholder-img" alt="..."></img>
                    <div class="center fs-5 text-white fw-semibold">Enigme 7</div>
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
                    <img src="https://media0.giphy.com/media/ibGFpMv1Uoais/200.webp?cid=ecf05e47vrjvjccq8szfdlpu9rjkqru8olte26kdm5zpo4zj&rid=200.webp&ct=g" class="card-img-top card_image bd-placeholder-img" alt="..."></img>
                    <div class="center fs-5 text-white fw-semibold">Enigme 8</div>
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
                    <img src="https://media0.giphy.com/media/zrxazUScjhxo4/200w.webp?cid=ecf05e47of5uql7n2u1t00o7hrz6khxl9dx3avni1vxrugqw&rid=200w.webp&ct=g" class="card-img-top card_image bd-placeholder-img" alt="..."></img>
                    <div class="center fs-5 text-white fw-semibold">Enigme 8</div>
                    <div class="card-body">
                      <p class="card-text">Ceci est la phrase lol</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">Bouton 1</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Bouton 2</button>
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
            <img src="lol.jpg" id="img_footer" alt="..."></img>
            </p>
            <p class="mb-1">Copyright S.A.S immatriculé 235.658.345 à Paris. Vous pouvez UNIQUEMENT payer en nature. Toute triche sera sanctionnée de 3 fessées. Chaque rire sera sanctionnée 2 bisous. Pas de rouge à lèvres et coupez vous les ongles, merci.</p>
          </div>
        </footer>
      </body>
    </div>
    );
}

export default App;
