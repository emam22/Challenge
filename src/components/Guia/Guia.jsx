import React from 'react'

export default function Guia() {
  return (
    <div className="row">

    <div className="col s2">
        <div className="preloader-wrapper big active ">
            <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    </div>
    <div className="col s8 ">
      <div class="col s12 m7">
      <div class="card horizontal">
        <div class="card-stacked">
          <div class="card-content">
            <p>Escriba el nombre de usuario que desee buscar.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="col s2">
        <div className="preloader-wrapper big active ">
            <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}
