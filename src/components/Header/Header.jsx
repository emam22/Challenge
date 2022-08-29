import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Guia from '../Guia/Guia'
import 'materialize-css/dist/css/materialize.min.css'

export default function GitHubContainer() {
    const [search, setSearch] = useState("")
    const [userGit, setUserGit] = useState({})
    const [projects, setProjects] = useState([ ])
    const [errorMjs, setErrorMjs] = useState("")
    

    const handleChange = e => {
        setSearch(e.target.value);
        console.log("Busqueda: " + e.target.value);        
    }

    useEffect(() => {
        getApigit()
        getApiGitRepos()
    }, [])
    
    function getApigit() {
        axios.get(`https://api.github.com/users/${search}`, {
          })
          .then(function (response) {
            setUserGit(response.data)
            console.log(response);
          })
          .catch(function (error) {
            setErrorMjs("GitHub temporalmente fuera de servicio.")
            console.log(errorMjs);
          });
    }

    function getApiGitRepos () {
        
        axios.get(`https://api.github.com/users/${search}/repos`, {})
            .then(function (response) {
                setProjects(response.data)
            })
            .catch(function (error) {            
            setErrorMjs("GitHub temporalmente fuera de servicio.")
            });
        
    }

    const searchData = (e) => {
        e.preventDefault();
        
        getApigit()
        getApiGitRepos()
    }
    
    return (

    <>
        <nav>
            <div className="nav-wrapper deep-purple accent-4">
            <form onSubmit={(e) => searchData(e)}>
                <div className="input-field">
                <input id="search" 
                    type="search" 
                    required 
                    value={search} 
                    onChange={handleChange} 
            />
                <label className="label-icon" for="search"><i className=" medium material-icons">search</i></label>
                <i className="material-icons" onClick={() => setSearch("")}>close</i>
                </div>
            </form>
            </div>
        </nav>
        <header className="row card-panel ">
        {
            userGit && userGit.name
            ?   <> 
                    <div className="col s3 ">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={userGit.avatar_url} alt="avatar_url"/>
                            </div>
                            <div className="card-content deep-purple lighten-1 ">
                                <h4 className="card-title activator grey-text text-darken-4 ">{userGit.name}</h4>
                                <p> <i className="material-icons tiny">location_on</i>{userGit.location} <br/>
                                <i className="material-icons tiny">account_circle</i>{userGit.login}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col s9">

                        <ul className="collection with-header">                    
                            <li className="collection-header center-align deep-purple darken-2"><h4>Repositorios</h4></li>
                            {
                                projects.slice(0,6).map((project) =>
                                    <div key={project.id}>
                                        <li className="collection-item deep-purple lighten-1">
                                            <div> 
                                                <h5>{project.name}</h5> 
                                                <a href={project.html_url} className="secondary-content"><i className="material-icons">folder_special</i></a>
                                                <p> {project.description} </p> 
                                            </div>
                                        </li>
                                    </div>
                                )
                            }

                                
                        </ul>
                    </div>
                </>
            :   <Guia/>
        }
        </header>
    </>
  )
}
